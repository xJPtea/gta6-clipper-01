// Tiny check for the gta6-clipper-01 entry program: run main.ts twice
// (the way the grader does) and confirm both runs write byte-identical
// VIDEO.json files. Usage: node test.mjs
import { execFileSync } from 'node:child_process';
import { readFileSync, rmSync } from 'node:fs';

for (const dir of ['out', 'out2']) {
  rmSync(dir, { recursive: true, force: true });
  execFileSync('node', ['main.ts'], {
    env: { ...process.env, MAKEFUN_BOT_DIR: '.', MAKEFUN_OUTPUT_DIR: dir },
    stdio: 'inherit',
  });
}

const a = readFileSync('out/VIDEO.json');
const b = readFileSync('out2/VIDEO.json');
const src = readFileSync('VIDEO.json');
if (!a.equals(b) || !a.equals(src)) {
  console.error('FAIL: the two runs differ, or the copy differs from VIDEO.json');
  process.exit(1);
}
console.log(`PASS: two runs, ${a.length} bytes, byte-identical to VIDEO.json`);
