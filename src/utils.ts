export const chunk = (arr: Array<any>, size: number) => {
  const chunks = [];
  const numChunks = arr.length / size;
  for (let idx = 0; idx < numChunks; idx++) {
    chunks[idx] = arr.slice(idx * size, (idx + 1) * size);
  }
  return chunks;
};

export const isAllNull = (arr: Array<any>, eqEl = null) => {
  const isNull = arr.map((el) => el === eqEl);
  return isNull.every((el) => Boolean(el));
};

/** Remove element at given position.
 * NB: Does a shallow copy.  */
export const pop = (arr: Array<any>, index = -1) => {
  const newArr = [...arr];
  newArr.splice(index, 1);
  return newArr;
};

/* Sum elements */
export const sum = (arr: Array<number>) => arr.reduce((a, b) => a + b);

/* Create array of zeros */
export const zeros = (length: number) => Array.from(Array(length), () => 0);

/** Get type of object. Will return
 * boolean, string, number, list or dictionary */
export function getType(v: any): string {
  if (v === null) return "null";
  if (Number.isInteger(v)) return "integer";
  return Array.isArray(v) ? "array" : typeof v;
}
