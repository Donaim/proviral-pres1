/* eslint-disable no-console */

console.log("HELLO!!!");

// #region snippet
// Inside ./snippets/external.ts
export function emptyArray<T>(length: number) {
  return Array.from<T>({ length })
}
// #endregion snippet

export function sayHello() {
  console.log('Hello from snippets/external.ts')
}
