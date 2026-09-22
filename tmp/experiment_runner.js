const cp = require("child_process");
const fs = require("fs");
const http = require("http");

const chromePath = "/tmp/chrome-bin";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function stopServer() {
  try {
    cp.execSync('pkill -9 -f "next-server.*3001" || true');
  } catch (e) {}
  try {
    cp.execSync('pkill -9 -f "next start -p 3001" || true');
  } catch (e) {}
}

async function startServer() {
  stopServer();
  console.log("[SERVER] Starting next start -p 3001...");
  const child = cp.spawn("npx", ["next", "start", "-p", "3001"], {
    detached: true,
    stdio: "ignore",
  });
  child.unref();

  for (let i = 0; i < 20; i++) {
    try {
      const code = cp.execSync(
        'curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3001/id',
        { encoding: "utf8" }
      );
      if (code.trim() === "200") {
        console.log("[SERVER] Ready and responding 200 OK.");
        return;
      }
    } catch (e) {}
    await sleep(1000);
  }
  throw new Error("Server failed to start on 3001");
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (err) {
            reject(err);
          }
        });
      })
      .on("error", reject);
  });
}

// 1. Precise Mobile CDP Cold Navigation Trace
async function captureMobileTrace(targetUrl) {
  console.log(`[TRACE] Capturing Mobile Cold Navigation Trace for: ${targetUrl}`);

  // Launch fresh Chrome with remote debugging
  const chromeArgs = [
    "--headless=new",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--remote-debugging-port=9222",
    "--user-data-dir=/tmp/chrome-profile-" + Date.now(),
    "--window-size=375,812",
  ];

  const chromeProc = cp.spawn(chromePath, chromeArgs);
  await sleep(1500);

  let pageInfo;
  for (let i = 0; i < 10; i++) {
    try {
      const list = await getJson("http://127.0.0.1:9222/json/list");
      if (list && list.length > 0 && list[0].webSocketDebuggerUrl) {
        pageInfo = list[0];
        break;
      }
    } catch (e) {}
    await sleep(500);
  }

  if (!pageInfo || !pageInfo.webSocketDebuggerUrl) {
    // Try creating a new target if list was empty
    try {
      pageInfo = await getJson("http://127.0.0.1:9222/json/new");
    } catch(e) {}
  }

  if (!pageInfo || !pageInfo.webSocketDebuggerUrl) {
    chromeProc.kill();
    throw new Error("Failed to connect to Chrome Page DevTools port 9222");
  }

  const ws = new WebSocket(pageInfo.webSocketDebuggerUrl);

  let idCounter = 1;
  const pendingRequests = new Map();

  function sendCommand(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pendingRequests.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  const rawRequests = new Map();
  const priorityChanges = new Map();
  let navigationStartTime = 0;

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pendingRequests.has(msg.id)) {
      const { resolve, reject } = pendingRequests.get(msg.id);
      pendingRequests.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
      return;
    }

    const { method, params } = msg;

    if (method === "Network.requestWillBeSent") {
      const { requestId, request, wallTime, timestamp, type, initiator } = params;
      if (!rawRequests.has(requestId)) {
        rawRequests.set(requestId, {
          requestId,
          url: request.url,
          method: request.method,
          initialPriority: request.initialPriority,
          finalPriority: request.initialPriority,
          type: type || request.resourceType || "Other",
          startTimeStamp: timestamp,
          initiator: initiator?.type || "unknown",
          transferSize: 0,
          status: 0,
        });
      }
    } else if (method === "Network.resourceChangedPriority") {
      const { requestId, newPriority, timestamp } = params;
      if (rawRequests.has(requestId)) {
        const r = rawRequests.get(requestId);
        r.finalPriority = newPriority;
        r.priorityChangedAt = timestamp;
      }
      if (!priorityChanges.has(requestId)) priorityChanges.set(requestId, []);
      priorityChanges.get(requestId).push({ newPriority, timestamp });
    } else if (method === "Network.responseReceived") {
      const { requestId, response, timestamp, type } = params;
      if (rawRequests.has(requestId)) {
        const r = rawRequests.get(requestId);
        r.status = response.status;
        r.mimeType = response.mimeType;
        if (type) r.type = type;
        r.encodedDataLength = response.encodedDataLength;
        r.timing = response.timing;
      }
    } else if (method === "Network.loadingFinished") {
      const { requestId, timestamp, encodedDataLength } = params;
      if (rawRequests.has(requestId)) {
        const r = rawRequests.get(requestId);
        r.endTimeStamp = timestamp;
        r.transferSize = encodedDataLength;
      }
    } else if (method === "Page.lifecycleEvent" && params.name === "firstContentfulPaint") {
      // capture lifecycle if needed
    }
  };

  // Set up mobile emulation
  await sendCommand("Network.enable");
  await sendCommand("Page.enable");
  await sendCommand("Emulation.setDeviceMetricsOverride", {
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    mobile: true,
  });
  await sendCommand("Emulation.setUserAgentOverride", {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  });

  // Clear cache and cookies for authentic cold run
  await sendCommand("Network.clearBrowserCache");
  await sendCommand("Network.clearBrowserCookies");

  const navRes = await sendCommand("Page.navigate", { url: targetUrl });
  navigationStartTime = Date.now();

  // Wait for load event and page stabilization
  await sleep(4000);

  // Extract DOM attributes for all images
  const evalRes = await sendCommand("Runtime.evaluate", {
    expression: `
      Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.getAttribute('src') || '',
        currentSrc: img.currentSrc || '',
        loading: img.getAttribute('loading') || '',
        fetchPriority: img.getAttribute('fetchpriority') || img.getAttribute('fetchPriority') || '',
        decoding: img.getAttribute('decoding') || '',
        id: img.id || '',
        alt: img.alt || '',
        className: img.className || '',
        rect: {
          top: img.getBoundingClientRect().top,
          left: img.getBoundingClientRect().left,
          width: img.getBoundingClientRect().width,
          height: img.getBoundingClientRect().height,
        }
      }))
    `,
    returnByValue: true,
  });

  const domImages = evalRes.result?.value || [];

  ws.close();
  chromeProc.kill();
  try {
    cp.execSync('pkill -9 -f "chrome" || true');
  } catch (e) {}

  // Process trace requests relative to first document request
  const requests = Array.from(rawRequests.values());
  const docReq = requests.find((r) => r.type === "Document") || requests[0];
  const baseTime = docReq ? docReq.startTimeStamp : (requests[0]?.startTimeStamp || 0);

  const normalizedRequests = requests.map((r) => {
    const startMs = Math.round((r.startTimeStamp - baseTime) * 1000);
    const endMs = r.endTimeStamp
      ? Math.round((r.endTimeStamp - baseTime) * 1000)
      : startMs + (r.timing ? Math.round(r.timing.receiveHeadersEnd || 0) : 0);
    const durationMs = endMs - startMs;

    return {
      requestId: r.requestId,
      url: r.url,
      type: r.type,
      status: r.status,
      startTimeMs: startMs,
      endTimeMs: endMs,
      durationMs,
      transferSize: r.transferSize || r.encodedDataLength || 0,
      initialPriority: r.initialPriority,
      finalPriority: r.finalPriority,
      initiator: r.initiator,
    };
  });

  // Identify Hero Image
  const heroReq = normalizedRequests.find(
    (r) =>
      r.url.includes("hero-mobile") ||
      (r.type === "Image" && r.initialPriority === "High") ||
      (r.url.includes("hero") && r.type === "Image")
  );

  const heroStart = heroReq ? heroReq.startTimeMs : 0;
  const heroEnd = heroReq ? heroReq.endTimeMs : 0;
  const heroDuration = heroReq ? heroReq.durationMs : 0;
  const heroSize = heroReq ? heroReq.transferSize : 0;

  // Identify below-the-fold image requests
  const imageRequests = normalizedRequests.filter(
    (r) => r.type === "Image" || r.url.includes("/_next/image") || /\.(webp|png|jpg|jpeg|svg)/.test(r.url)
  );

  const nonHeroRequests = normalizedRequests.filter((r) => r.url !== heroReq?.url);

  // Overlapping requests during hero transfer interval:
  // Starts before hero ends, and ends after hero starts
  const overlappingRequests = nonHeroRequests.filter(
    (r) => r.startTimeMs < heroEnd && r.endTimeMs > heroStart
  );

  const overlappingImageRequests = overlappingRequests.filter(
    (r) => r.type === "Image" || r.url.includes("/_next/image") || /\.(webp|png|jpg|jpeg|svg)/.test(r.url)
  );

  const totalOverlappingBytes = overlappingRequests.reduce((sum, r) => sum + r.transferSize, 0);
  const totalOverlappingImageBytes = overlappingImageRequests.reduce((sum, r) => sum + r.transferSize, 0);

  // Categorize specific image types:
  const clientLogoRequests = imageRequests.filter(
    (r) => r.url.includes("client-") || r.url.includes("logo") && !r.url.includes("footer")
  );
  const factoryImageRequests = imageRequests.filter(
    (r) => r.url.includes("factory") || r.url.includes("prod-")
  );
  const productProjectRequests = imageRequests.filter(
    (r) => r.url.includes("product") || r.url.includes("project") || r.url.includes("paving")
  );
  const footerLogoRequests = imageRequests.filter((r) => r.url.includes("footer-logo"));

  return {
    hero: {
      url: heroReq?.url || "Not Found",
      startTimeMs: heroStart,
      endTimeMs: heroEnd,
      durationMs: heroDuration,
      transferSize: heroSize,
      initialPriority: heroReq?.initialPriority,
      finalPriority: heroReq?.finalPriority,
    },
    overlapping: {
      totalNonHeroOverlapCount: overlappingRequests.length,
      overlappingImageCount: overlappingImageRequests.length,
      totalOverlappingBytes,
      totalOverlappingImageBytes,
      overlappingRequests: overlappingRequests.map((r) => ({
        url: r.url,
        type: r.type,
        startMs: r.startTimeMs,
        endMs: r.endTimeMs,
        bytes: r.transferSize,
        priority: `${r.initialPriority} -> ${r.finalPriority}`,
      })),
    },
    categories: {
      clientLogos: clientLogoRequests.map((r) => ({
        url: r.url,
        initialPriority: r.initialPriority,
        finalPriority: r.finalPriority,
        startMs: r.startTimeMs,
        endMs: r.endTimeMs,
        size: r.transferSize,
      })),
      factoryImages: factoryImageRequests.map((r) => ({
        url: r.url,
        initialPriority: r.initialPriority,
        finalPriority: r.finalPriority,
        startMs: r.startTimeMs,
        endMs: r.endTimeMs,
        size: r.transferSize,
      })),
      productProjectImages: productProjectRequests.map((r) => ({
        url: r.url,
        initialPriority: r.initialPriority,
        finalPriority: r.finalPriority,
        startMs: r.startTimeMs,
        endMs: r.endTimeMs,
        size: r.transferSize,
      })),
      footerLogo: footerLogoRequests.map((r) => ({
        url: r.url,
        initialPriority: r.initialPriority,
        finalPriority: r.finalPriority,
        startMs: r.startTimeMs,
        endMs: r.endTimeMs,
        size: r.transferSize,
      })),
    },
    domImages,
    allRequests: normalizedRequests,
  };
}

// 2. Lighthouse 3-Run Benchmark
function runSingleLighthouse(runNumber, label) {
  const outputPath = `/tmp/lh_${label}_run${runNumber}.json`;
  console.log(`[LIGHTHOUSE] Running ${label} Run ${runNumber}...`);

  const cmd = `CHROME_PATH=${chromePath} npx lighthouse http://127.0.0.1:3001/id \
    --only-categories=performance \
    --form-factor=mobile \
    --screenEmulation.width=375 \
    --screenEmulation.height=812 \
    --screenEmulation.deviceScaleFactor=3 \
    --screenEmulation.mobile=true \
    --chrome-flags="--headless=new --no-sandbox --disable-dev-shm-usage --disable-gpu" \
    --output=json \
    --output-path=${outputPath} \
    --quiet`;

  cp.execSync(cmd, { stdio: "inherit", encoding: "utf8" });

  const result = JSON.parse(fs.readFileSync(outputPath, "utf8"));
  const a = result.audits;

  const lcpBreakdown = a["largest-contentful-paint-element"]?.details?.items?.[0] || {};
  const lcpBreakdownTimings = a["lcp-breakdown"]?.details?.items?.[0] || {};

  return {
    run: runNumber,
    performanceScore: Math.round(result.categories.performance.score * 100),
    fcp: a["first-contentful-paint"]?.numericValue || 0,
    fcpDisplay: a["first-contentful-paint"]?.displayValue || "",
    lcp: a["largest-contentful-paint"]?.numericValue || 0,
    lcpDisplay: a["largest-contentful-paint"]?.displayValue || "",
    tbt: a["total-blocking-time"]?.numericValue || 0,
    tbtDisplay: a["total-blocking-time"]?.displayValue || "",
    cls: a["cumulative-layout-shift"]?.numericValue || 0,
    clsDisplay: a["cumulative-layout-shift"]?.displayValue || "",
    speedIndex: a["speed-index"]?.numericValue || 0,
    speedIndexDisplay: a["speed-index"]?.displayValue || "",
    lcpTarget: lcpBreakdown?.node?.nodeLabel || lcpBreakdown?.node?.snippet || "Unknown",
    elementRenderDelay:
      lcpBreakdownTimings?.renderDelay ||
      (a["largest-contentful-paint"]?.numericValue || 0) -
        (lcpBreakdownTimings?.loadEndTime || 0),
    lcpDetails: {
      ttfb: lcpBreakdownTimings?.ttfb || 0,
      loadDelay: lcpBreakdownTimings?.loadDelay || 0,
      loadDuration: lcpBreakdownTimings?.loadDuration || 0,
      renderDelay: lcpBreakdownTimings?.renderDelay || 0,
    },
  };
}

async function runBenchmark(label, runsCount = 3) {
  const runs = [];
  for (let i = 1; i <= runsCount; i++) {
    const res = runSingleLighthouse(i, label);
    runs.push(res);
    console.log(
      `Run ${i} Result: Perf=${res.performanceScore}, FCP=${(res.fcp / 1000).toFixed(
        2
      )}s, LCP=${(res.lcp / 1000).toFixed(2)}s, TBT=${res.tbt.toFixed(0)}ms, CLS=${res.cls.toFixed(
        3
      )}, SI=${(res.speedIndex / 1000).toFixed(2)}s, Target=${res.lcpTarget}`
    );
    await sleep(2000);
  }

  // Calculate median run based on LCP
  const sortedByLcp = [...runs].sort((a, b) => a.lcp - b.lcp);
  const medianRun = sortedByLcp[Math.floor(runs.length / 2)];

  return {
    runs,
    median: {
      performanceScore: medianRun.performanceScore,
      fcp: medianRun.fcp,
      lcp: medianRun.lcp,
      tbt: medianRun.tbt,
      cls: medianRun.cls,
      speedIndex: medianRun.speedIndex,
      lcpTarget: medianRun.lcpTarget,
      elementRenderDelay: medianRun.elementRenderDelay,
      lcpDetails: medianRun.lcpDetails,
    },
  };
}

async function main() {
  const label = process.argv[2] || "version_a";
  await startServer();

  // Capture Mobile Network Trace
  const trace = await captureMobileTrace("http://127.0.0.1:3001/id");
  fs.writeFileSync(`/tmp/trace_${label}.json`, JSON.stringify(trace, null, 2), "utf8");
  console.log(`[TRACE] Saved trace to /tmp/trace_${label}.json`);

  // Run 3-Run Lighthouse Benchmark
  const benchmark = await runBenchmark(label, 3);
  stopServer();

  const fullData = {
    label,
    traceSummary: {
      hero: trace.hero,
      overlapping: trace.overlapping,
      categories: trace.categories,
      domImagesCount: trace.domImages.length,
    },
    benchmark,
  };

  fs.writeFileSync(`/tmp/full_results_${label}.json`, JSON.stringify(fullData, null, 2), "utf8");
  console.log(`\n=== EXPERIMENT SUMMARY FOR ${label.toUpperCase()} ===`);
  console.log(JSON.stringify(fullData, null, 2));
}

main().catch((err) => {
  console.error("Experiment failed:", err);
  stopServer();
  process.exit(1);
});
