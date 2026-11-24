// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt.
// The line must stay under 200 characters (currently 145) and on one line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The code didn't break in production — a real user finally clicked the button the way the ticket said to, and that was the one path nobody tested.";

// Guard the gate: the scorer only accepts 1-200 characters.
if (LINE.length === 0 || LINE.length > 200) {
  throw new Error("entry line must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
