import type { Equal, Expect } from "@total-typescript/helpers";

import type pngUrl1 from "./example1.png";
import type pngUrl2 from "./example2.png";
import type pngUrl3 from "./example3.png";
import type pngUrl4 from "./example4.png";

type test = [
	Expect<Equal<typeof pngUrl1, string>>,
	Expect<Equal<typeof pngUrl2, string>>,
	Expect<Equal<typeof pngUrl3, string>>,
	Expect<Equal<typeof pngUrl4, string>>,
];
