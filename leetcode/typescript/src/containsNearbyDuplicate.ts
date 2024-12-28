function containsNearbyDuplicate(nums: number[], k: number): boolean {

    const hs = {
        [nums[0]]: 0,
    }

    for (let i = 1; i < nums.length; i++) {
        if (hs[nums[i]] != null && Math.abs(hs[nums[i]] - i) <= k)
            return true
        hs[nums[i]] = i
    }

    return false
};

