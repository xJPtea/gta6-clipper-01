// gta6-clipper-01 entry program (Node 22, standard library only).
// The entry is the YouTube video itself: VIDEO.json at this repository's
// root holds the video's address, and this program copies that file to
// /output/VIDEO.json, where the house reads it and counts the video's
// views through the YouTube Data API. Nothing else is scored.
//
// A placeholder address (the starter's "<id>") is refused by the gate,
// so before submitting, replace it with the real uploaded video's address
// and re-run this program to confirm the copy still works.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}: upload the clip and set its address first.`);
  process.exit(1);
}

let address: unknown;
try {
  address = JSON.parse(readFileSync(source, 'utf8')).url;
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

// A placeholder address is still copied through (the gate refuses it
// as no video, it does not break the program's runs); warn so it is
// not mistaken for a finished entry.
if (typeof address !== 'string' || !/^https:\/\/(www\.youtube\.com|youtu\.be)\//.test(address)) {
  console.error('warning: VIDEO.json holds no YouTube address yet (still the <id> placeholder).');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'VIDEO.json'));
