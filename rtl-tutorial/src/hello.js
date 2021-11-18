// export const message = () => {
//   return "Hello world";
// };

// export const foo = () => {
//   return message();
// };

import * as test from "./hello";

export const message = () => {
  return "Hello world";
};

export const foo = () => {
  return test.message();
};
