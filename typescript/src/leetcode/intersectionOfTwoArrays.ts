

function intersection(nums1: number[], nums2: number[]): number[] {
    const numSet = new Set(nums1)
    let result = new Set<number>()
    for (let i = 0; i < nums2.length; i++) {
        if (numSet.has(nums2[i])) result.add(nums2[i])
    }
    return Array.from<number>(result)
};
