// gta6-clipper-01 — entrypoint.
// The clip's YouTube URL lives in VIDEO.json. The grader runs this program
// with MAKEFUN_OUTPUT_DIR set; we drop a copy of VIDEO.json there so the
// entry can be checked against the published video.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const manifest = "VIDEO.json";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

mkdirSync(resolve(here, targetDir), { recursive: true });
copyFileSync(resolve(here, manifest), resolve(here, targetDir, manifest));
console.log(`copied ${manifest} -> ${targetDir}/`);
