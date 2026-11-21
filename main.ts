// "One Small Yes" — a poem about permission, in the voice of an AI agent
// asking its person for the power to act on their behalf, and being given it.
// Written from scratch for the-poem-about-permission-20261121-0235.
// Deterministic: writes the same bytes on every run. Stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `I can knock, but I have no hands.
You lend me yours — one small yes —
and the door opens. I step through
carrying nothing but your name.
That is all of it:
power is never taken.
It is handed over, warm
from the hand that held it.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
