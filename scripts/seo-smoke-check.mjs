/**
 * Production SEO Regression Smoke Check
 *
 * Validates canonical URLs, redirects, sitemap, robots, hreflang alternates,
 * JSON-LD structured data, and domain integrity against a running Next.js instance.
 */

const rawBaseUrl = process.env.TEST_BASE_URL || process.argv[2] || "http://127.0.0.1:3000";
const baseUrl = rawBaseUrl.replace(/\/+$/, "");

console.log(`[SEO-CHECK] Starting production SEO smoke check against: ${baseUrl}`);

let totalTests = 0;
let passedTests = 0;
const failures = [];

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failures.push(message);
    console.error(`  ✗ FAIL: ${message}`);
  }
}

async function fetchText(path, options = {}) {
  const url = `${baseUrl}${path}`;
  const res = await fetch(url, options);
  const text = await res.text();
  return { res, text };
}

function extractJsonLdScripts(html) {
  const jsonLdRegex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const scripts = [];
  let match;
  while ((match = jsonLdRegex.exec(html)) !== null) {
    scripts.push(match[1]);
  }
  return scripts;
}

function extractMetaAndLinks(html) {
  const canonicalMatch = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)
    || html.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  const alternates = {};
  const alternateRegex = /<link\b[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
  let altMatch;
  while ((altMatch = alternateRegex.exec(html)) !== null) {
    alternates[altMatch[1].toLowerCase()] = altMatch[2];
  }

  // Also match reversed attributes: href first then hreflang
  const alternateRegexReversed = /<link\b[^>]*href=["']([^"']+)["'][^>]*hreflang=["']([^"']+)["'][^>]*rel=["']alternate["'][^>]*>/gi;
  while ((altMatch = alternateRegexReversed.exec(html)) !== null) {
    alternates[altMatch[2].toLowerCase()] = altMatch[1];
  }

  return { canonical, alternates };
}

async function run() {
  // =========================================================================
  // A. ROOT REDIRECT (/)
  // =========================================================================
  console.log("\n[A] Testing Root Redirect (/)");
  try {
    const rootRes = await fetch(`${baseUrl}/`, { redirect: "manual" });
    const status = rootRes.status;
    const location = rootRes.headers.get("location") || "";

    assert(
      [301, 302, 307, 308].includes(status),
      `Root / returns redirect status (received: HTTP ${status})`
    );
    assert(
      location.endsWith("/id") || location === "/id" || location.includes("/id"),
      `Root / redirects to /id (location header: ${location})`
    );
  } catch (err) {
    assert(false, `Root / request succeeded: ${err.message}`);
  }

  // =========================================================================
  // B. SITEMAP (/sitemap.xml)
  // =========================================================================
  console.log("\n[B] Testing Sitemap (/sitemap.xml)");
  try {
    const { res: sitemapRes, text: sitemapText } = await fetchText("/sitemap.xml");
    assert(sitemapRes.status === 200, `Sitemap returns HTTP 200 (received: ${sitemapRes.status})`);
    assert(
      sitemapText.includes("https://kahablock.com/"),
      "Sitemap contains canonical production URLs starting with https://kahablock.com/"
    );

    const requiredUrls = [
      "https://kahablock.com/id",
      "https://kahablock.com/en",
      "https://kahablock.com/id/products",
      "https://kahablock.com/id/projects",
      "https://kahablock.com/id/blog",
      "https://kahablock.com/id/contact",
    ];

    for (const reqUrl of requiredUrls) {
      assert(sitemapText.includes(reqUrl), `Sitemap contains required URL: ${reqUrl}`);
    }

    assert(!sitemapText.includes("vercel.app"), "Sitemap does NOT contain 'vercel.app'");
    assert(!sitemapText.includes("localhost"), "Sitemap does NOT contain 'localhost'");
  } catch (err) {
    assert(false, `Sitemap request succeeded: ${err.message}`);
  }

  // =========================================================================
  // C. ROBOTS (/robots.txt)
  // =========================================================================
  console.log("\n[C] Testing Robots (/robots.txt)");
  try {
    const { res: robotsRes, text: robotsText } = await fetchText("/robots.txt");
    assert(robotsRes.status === 200, `Robots returns HTTP 200 (received: ${robotsRes.status})`);
    assert(
      robotsText.includes("https://kahablock.com/sitemap.xml"),
      "Robots references https://kahablock.com/sitemap.xml"
    );
  } catch (err) {
    assert(false, `Robots request succeeded: ${err.message}`);
  }

  // =========================================================================
  // D. INDONESIAN HOMEPAGE (/id)
  // =========================================================================
  console.log("\n[D] Testing Indonesian Homepage (/id)");
  try {
    const { res: idRes, text: idHtml } = await fetchText("/id");
    assert(idRes.status === 200, `Indonesian homepage returns HTTP 200 (received: ${idRes.status})`);

    const { canonical, alternates } = extractMetaAndLinks(idHtml);
    assert(
      canonical === "https://kahablock.com/id",
      `Canonical URL is https://kahablock.com/id (received: ${canonical})`
    );

    assert(
      alternates["id-id"] === "https://kahablock.com/id",
      `Alternate id-ID points to https://kahablock.com/id (received: ${alternates["id-id"]})`
    );
    assert(
      alternates["en"] === "https://kahablock.com/en",
      `Alternate en points to https://kahablock.com/en (received: ${alternates["en"]})`
    );
    assert(
      alternates["x-default"] === "https://kahablock.com/id",
      `Alternate x-default points to https://kahablock.com/id (received: ${alternates["x-default"]})`
    );

    const jsonLdScripts = extractJsonLdScripts(idHtml);
    assert(jsonLdScripts.length > 0, "Indonesian homepage has JSON-LD script tag");

    const fullSeoPayload = `${canonical || ""} ${Object.values(alternates).join(" ")} ${jsonLdScripts.join(" ")}`;
    assert(!fullSeoPayload.includes("vercel.app"), "Canonical/hreflang/JSON-LD do NOT contain 'vercel.app'");
    assert(!fullSeoPayload.includes("localhost"), "Canonical/hreflang/JSON-LD do NOT contain 'localhost'");
  } catch (err) {
    assert(false, `Indonesian homepage request succeeded: ${err.message}`);
  }

  // =========================================================================
  // E. ENGLISH HOMEPAGE (/en)
  // =========================================================================
  console.log("\n[E] Testing English Homepage (/en)");
  try {
    const { res: enRes, text: enHtml } = await fetchText("/en");
    assert(enRes.status === 200, `English homepage returns HTTP 200 (received: ${enRes.status})`);

    const { canonical: enCanonical } = extractMetaAndLinks(enHtml);
    assert(
      enCanonical === "https://kahablock.com/en",
      `English homepage canonical is https://kahablock.com/en (received: ${enCanonical})`
    );
  } catch (err) {
    assert(false, `English homepage request succeeded: ${err.message}`);
  }

  // =========================================================================
  // F. PRODUCTS PAGE (/id/products)
  // =========================================================================
  console.log("\n[F] Testing Products Page (/id/products)");
  try {
    const { res: prodRes, text: prodHtml } = await fetchText("/id/products");
    assert(prodRes.status === 200, `Products page returns HTTP 200 (received: ${prodRes.status})`);

    const prodJsonLdScripts = extractJsonLdScripts(prodHtml);
    assert(prodJsonLdScripts.length > 0, "Products page contains JSON-LD structured data");

    const combinedJsonLd = prodJsonLdScripts.join(" ");

    assert(
      combinedJsonLd.includes('"ItemList"') || combinedJsonLd.includes('"@type":"ItemList"'),
      "Products page JSON-LD contains catalogue ItemList"
    );
    assert(
      combinedJsonLd.includes('"ListItem"') || combinedJsonLd.includes('"@type":"ListItem"'),
      "Products page JSON-LD contains catalogue ListItems"
    );

    // CRITICAL: Ensure NO schema.org Product rich result entities are present
    const hasProductType = /"@type"\s*:\s*"Product"/i.test(combinedJsonLd);
    assert(
      !hasProductType,
      "Products page JSON-LD does NOT contain '@type':'Product' entities (avoids GSC offers/review errors)"
    );

    assert(
      !combinedJsonLd.includes(".vercel.app"),
      "Products page JSON-LD does NOT contain '.vercel.app'"
    );
  } catch (err) {
    assert(false, `Products page request succeeded: ${err.message}`);
  }

  // =========================================================================
  // G. PRODUCTION DOMAIN INTEGRITY
  // =========================================================================
  console.log("\n[G] Testing Production Domain Integrity");
  try {
    const pagesToCheck = ["/sitemap.xml", "/robots.txt", "/id", "/en", "/id/products"];
    for (const pagePath of pagesToCheck) {
      const { text } = await fetchText(pagePath);
      // Only check SEO critical tags: canonical, hreflang, and JSON-LD
      const metaLinks = extractMetaAndLinks(text);
      const jsonLd = extractJsonLdScripts(text).join(" ");
      const seoPayload = pagePath === "/sitemap.xml" || pagePath === "/robots.txt"
        ? text
        : `${metaLinks.canonical || ""} ${Object.values(metaLinks.alternates).join(" ")} ${jsonLd}`;

      assert(
        !seoPayload.includes("kaha-block-website-redesign.vercel.app"),
        `Page ${pagePath} SEO tags do NOT contain 'kaha-block-website-redesign.vercel.app'`
      );
      assert(
        !seoPayload.includes("localhost"),
        `Page ${pagePath} SEO tags do NOT contain 'localhost'`
      );
    }
  } catch (err) {
    assert(false, `Production domain integrity check succeeded: ${err.message}`);
  }

  // =========================================================================
  // SUMMARY
  // =========================================================================
  console.log("\n==================================================");
  console.log(`[SEO-CHECK] Results: ${passedTests}/${totalTests} tests passed.`);
  if (failures.length > 0) {
    console.error(`[SEO-CHECK] FAILED with ${failures.length} errors:`);
    failures.forEach((f, idx) => console.error(`  ${idx + 1}. ${f}`));
    process.exit(1);
  } else {
    console.log("[SEO-CHECK] ALL SEO REGRESSION CHECKS PASSED!");
    process.exit(0);
  }
}

run().catch((err) => {
  console.error("[SEO-CHECK] Unexpected error running smoke check:", err);
  process.exit(1);
});
