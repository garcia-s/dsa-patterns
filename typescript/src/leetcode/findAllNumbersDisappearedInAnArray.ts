function findDisappearedNumbers(nums: number[]): number[] {
    const ans = new Array();
    let l = nums.length

    for (const n of nums) {
        let i = Math.abs(n) - 1;
        nums[i] = -Math.abs(nums[i]);
    }

    for (let i = 0; i < l; i++) {
        if (nums[i] > 0) {
            ans.push(i + 1)
        }
    }
    return ans
};


