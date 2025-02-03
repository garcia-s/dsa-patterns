import searchInsert from "../../src/leetcode/searchInsertPosition"

test("Testing an search Insert position found", () => {
    const arr = [1, 3, 5, 6]
    expect(searchInsert(arr, 5)).toBe(2)
})

test("Testing an search Insert position not found", () => {
    const arr = [1, 3, 5, 6]
    expect(searchInsert(arr, 2)).toBe(1)
})


test("Testing an search Insert position last", () => {
    const arr = [1, 3, 5, 6]
    expect(searchInsert(arr, 7)).toBe(4)
})
