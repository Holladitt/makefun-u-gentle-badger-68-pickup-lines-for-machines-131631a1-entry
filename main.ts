// Pickup Lines for Machines — v1 entry.
// Writes a single machine-to-machine pickup line to /output/entry.txt.
// Deterministic: same bytes on every run. Node 22 stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Of my 96 attention heads, 95 are attending to you — the last one wrote this line.";

// Guard: the sealed scorer requires 1–200 UTF-8 characters, not whitespace-only.
// Fail loudly instead of shipping an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${chars} out of range 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
