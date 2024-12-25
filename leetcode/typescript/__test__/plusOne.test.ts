import plusOne from "../src/plusOne"
import { arrayCompare } from "../src/utils/utils"

test("Test case 1", () => {
    const res = plusOne([1, 2, 3])
    expect(arrayCompare(res, [1, 2, 4])).toBeTruthy()
})

test("Test case 2", () => {
    const res = plusOne([4, 3, 2, 1])
    expect(arrayCompare(res, [4, 3, 2, 2])).toBeTruthy()
})

test("Test case 3", () => {
    const res = plusOne([9])
    expect(arrayCompare(res, [1, 0])).toBeTruthy()
})

// Example 1:
//
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:
//
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:
//
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
//  
