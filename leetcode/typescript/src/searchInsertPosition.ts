//Non recursive zero copy modified bin search
//O(log(n))

function searchInsert(nums: number[], target: number): number {
    let lo = 0
    let hi = nums.length - 1
    let mid = Math.floor(hi / 2)

    while (hi - lo > 0) {
        if (nums[mid] == target) return mid
        if (nums[mid] > target) {
            hi = mid
            mid = Math.floor(hi / 2)
            continue
        }
        lo = mid + 1
        mid = Math.floor((hi - lo) / 2) + lo
    }

    if (nums[lo] >= target) return lo
    return lo + 1
};

export default searchInsert
