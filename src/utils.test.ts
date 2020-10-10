import * as f from "./utils";

it("chunk", () => {
  const arr = [1, 2, 3];
  const chunks = f.chunk(arr, 1);
  expect(chunks).toEqual([[1], [2], [3]]);

  const arr2 = [1, 2, 3, 4];
  const chunks2 = f.chunk(arr2, 2);
  expect(chunks2).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

it("isAllNull", () => {
  expect(f.isAllNull([null, null])).toBe(true);
  expect(f.isAllNull([null, false])).toBe(false);
  expect(f.isAllNull([true, false])).toBe(false);
});

it("pop", () => {
  const arr = [0, 1, 2];
  const x = f.pop(arr, 1);
  expect(x).toEqual([0, 2]);
});

it("zeros", () => {
  expect(f.zeros(3)).toEqual([0, 0, 0]);
});
