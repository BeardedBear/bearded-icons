export function make(itemList: string[], scope: string): Record<string, unknown> {
  let obj = {};
  itemList.forEach((item) => (obj = { [item]: scope, ...obj }));
  return obj;
}
