/** Chunks an array */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks = [];
  const numChunks = arr.length / size;

  for (let idx = 0; idx < numChunks; idx++) {
    chunks[idx] = arr.slice(idx * size, (idx + 1) * size);
  }

  return chunks;
}

/** Removes an element at given position.
 * NB: Does a shallow copy. */
export function pop<T>(arr: T[], index = -1): T[] {
  const newArr = [...arr];
  newArr.splice(index, 1);
  return newArr;
}

/** Sums all elements in array */
export function sum(arr: number[]) {
  return arr.reduce((a, b) => a + b);
}

/** Creates array of zeros */
export function zeros(length: number): number {
  return [...new Array(length)].map(() => 0);
}
