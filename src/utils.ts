export const chunk = (arr: Array<any>, size: number) => {
  const chunks = [];
  const numChunks = arr.length / size;
  for (let idx = 0; idx < numChunks; idx++) {
    chunks[idx] = arr.slice(idx * size, (idx + 1) * size);
  }
  return chunks;
};

export const isAllNull = (arr, eqEl = null) => {
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
export function getType(v) {
  if (v === null) return "null";
  if (Number.isInteger(v)) return "integer";
  return Array.isArray(v) ? "array" : typeof v;
}


/** Recursively generate an object / array
 * with same shape as original.
 * All elements are corresponding relative types
 * Example: {a: ["a", 1]} -> {a: ["string", "number]}
 */
export function getDeepTypes(v) {
  if (v === null) return null;
  switch (getType(v)) {
    case "dictionary":
      let dict = {};
      Object.entries(v).forEach(
        ([key, value]) => (dict[key] = getDeepTypes(value))
      );
      return dict;
    case "list":
      let list = [];
      v.forEach((el) => list.push(getDeepTypes(el)));
      return list;
    default:
      return getType(v);
  }
}

export function toString(obj) {
  switch (getType(obj)) {
    case "dictionary":
      let dictionary = "";
      Object.entries(obj).forEach(
        ([key, value]) => (dictionary += `${key}: ${value}, `)
      );
      return `{${dictionary.substring(0, dictionary.length - 2)}}`;
    case "list":
      let list = "";
      obj.forEach((value) => (list += `${value}, `));
      return `[${list.substring(0, list.length - 2)}]`;
    default:
      return obj;
  }
}
