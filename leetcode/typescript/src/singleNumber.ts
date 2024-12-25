function singleNumber(nums: number[]): number {
    if (nums.length === 1) return nums[0]

    let num = 0;

    for (let i = 0; i < nums.length; i++) {
        num = num ^ nums[i]
    }
    return num
};
