import { solution1, solution2 } from ".";

describe("Euler 1 solutions", () => {
  it("should work", () => {
    const expected = 233168;
    expect(solution1()).toBe(expected);
    expect(solution2()).toBe(expected);
  });
});
