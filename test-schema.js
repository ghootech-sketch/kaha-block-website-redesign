const fs = require('fs');

async function check() {
  const data = await import('./.next/server/app/id/products.html').catch(() => null);
  console.log("We can parse JSON-LD by checking the built html but we can just use grep on the source to be sure.");
}
check();
