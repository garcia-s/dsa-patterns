/**
Do not return anything, modify nums in-place instead.
*/
function moveZeroes(nums: number[]): void {
    let s = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            const tmp = nums[i]
            nums[i] = nums[s]
            nums[s] = tmp
            s++
        }
    }
};
