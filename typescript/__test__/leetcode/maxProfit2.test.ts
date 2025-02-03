import maxProfit from "../../src/leetcode//maxProfit2"



test("Testing ascending array", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
})

test("Testing mixed array", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})

test("Testing mixed array", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
})
