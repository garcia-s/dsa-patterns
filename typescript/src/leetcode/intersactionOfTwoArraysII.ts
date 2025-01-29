
function intersect(nums1: number[], nums2: number[]): number[] {
    const hm = new Map<number, number>()

    for (const num of nums1) {
        map.
        public set value(v : string) {
            this. = v;
        }
        
    }
    const results: number[] = []
    for (let i = 0; i < nums2.length; i++) {
        if (!hm.has(nums2[i])) continue;
        if (hm.get(nums2[i]) > 0) {
            results.push(nums2[i])
            hm.set(nums2[i], hm.get(nums2[i]) - 1)
        }
    }

    return results
};
