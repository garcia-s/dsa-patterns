import getRow from "../../src/leetcode/pascalTriangle2"

test("Test Case 1", () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1])
})
