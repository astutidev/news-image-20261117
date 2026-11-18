// Build tool (not part of the entry): renders page.html to entry.png at
// exactly 1024x1024 with the local Chromium, so the shipped image is a
// faithful screenshot of the authored page. Deterministic for a fixed page.
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require(
  "/home/hatch/workspace/makefun/shot-tools/node_modules/playwright"
);
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({
  executablePath:
    "/home/hatch/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome",
  args: ["--no-sandbox", "--force-color-profile=srgb"],
});
const page = await browser.newPage({
  viewport: { width: 1024, height: 1024 },
  deviceScaleFactor: 1,
});
await page.goto("file://" + join(here, "page.html"));
await page.waitForTimeout(350);
await page.screenshot({ path: join(here, "entry.png"), type: "png" });
await browser.close();
console.log("rendered entry.png");
