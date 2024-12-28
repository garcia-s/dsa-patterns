
function containsDuplicate(nums: number[]): boolean {
    const hs = new Set<number>()
    hs.add(nums[0])

    for (let i = 1; i < nums.length; i++) {
        if (hs.has(nums[i])) return true
        hs.add(nums[i])
    }
    return false
};
