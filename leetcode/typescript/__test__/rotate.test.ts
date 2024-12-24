import rotate from "../src/rotate"
import { arrayCompare } from "../src/utils/utils"

test("Testing k3 rotation", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    rotate(nums, 3)
    expect(arrayCompare(nums, [5, 6, 7, 1, 2, 3, 4])).toBeTruthy()
})

test("Testing k2 rotation", () => {
    const nums = [-1, -100, 3, 99]
    rotate(nums, 2)
    expect(arrayCompare(nums, [3, 99, -1, -100])).toBeTruthy()
})

