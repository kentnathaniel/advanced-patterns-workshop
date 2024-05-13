import { Equal, Expect } from "../helpers/type-utils";

export function makeEventHandlers<TKeys extends string>(obj: {
  [K in TKeys]: (name: K) => void;
}) {
  return obj;
}

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "click">>;
  },
  focus: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "focus">>;
  },
});
