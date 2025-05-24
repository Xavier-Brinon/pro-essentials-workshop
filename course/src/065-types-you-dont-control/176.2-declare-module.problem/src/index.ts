import type { Equal, Expect } from "@total-typescript/helpers";

import type { myModuleFunc } from "my-module";

type test = Expect<Equal<typeof myModuleFunc, () => void>>;
