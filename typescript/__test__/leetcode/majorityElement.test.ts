import majorityElement from "../../src/leetcode/majorityElement";

test("Test with single item", () => {
    const res = majorityElement([2])
    expect(res).toBe(2)
})

test("Testing with small array", () => {
    const res = majorityElement([3, 2, 3])
    expect(res).toBe(3)
})


test("Test with multiple sequences", () => {
    const res = majorityElement([2, 2, 1, 1, 1, 2, 2,])
    expect(res).toBe(2)
})
