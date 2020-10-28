import * as utils from "./utils";

describe("chunk", () => {
  it("handles chunk length of 1", () => {
    const chunks = utils.chunk([1, 2, 3], 1);
    expect(chunks).toEqual([[1], [2], [3]]);
  });

  it("handles chunk length of 2", () => {
    const chunks2 = utils.chunk([1, 2, 3, 4], 2);
    expect(chunks2).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});

test("pop", () => {
  const arr = [0, 1, 2];
  const x = utils.pop(arr, 1);

  expect(x).toEqual([0, 2]);
});

test("zeros", () => {
  expect(utils.zeros(3)).toEqual([0, 0, 0]);
});
