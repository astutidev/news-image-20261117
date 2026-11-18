// The World in One Day — Tuesday 17 November 2026.
// The entry image (entry.png, rendered from page.html by render.mjs) is held
// in this repository; this program copies it to the output directory.
// It runs with no network and writes the same bytes on every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));

console.log("entry.png written to " + outDir);
