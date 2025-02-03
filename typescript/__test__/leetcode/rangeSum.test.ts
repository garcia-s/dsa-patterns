import NumArray from "../../src/leetcode/rangeSum";

test("Testing rangeSum an array", () => {
    let arr = new NumArray([-2, 0, 3, -5, 2, -1]);

    expect(arr.sumRange(0, 2)).toBe(1)
    expect(arr.sumRange(2, 5)).toBe(-1)
    expect(arr.sumRange(0, 5)).toBe(-3)
})


