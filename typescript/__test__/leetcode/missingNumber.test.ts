import missingNumber from "../src/missingNumber"

test("Test Case 1", () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
})

test("Test Case 2", () => {
    expect(missingNumber([0, 1])).toBe(2)
})

test("Test Case 3", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
})


