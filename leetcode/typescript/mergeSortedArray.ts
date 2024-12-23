

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1
    let j = n - 1
    let k = n + m - 1

    while (j >= 0) {
        i >= 0 && nums1[i] >= nums2[k] ?
            nums1[k--] = nums1[i--] :
            nums1[k--] = nums2[j--]
    }
};  
