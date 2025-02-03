import rotate from "../../src/leetcode/rotate"

test("Testing k3 rotation", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    rotate(nums, 3)
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test("Testing k2 rotation", () => {
    const nums = [-1, -100, 3, 99]
    rotate(nums, 2)
    expect(nums).toEqual([3, 99, -1, -100])
})

