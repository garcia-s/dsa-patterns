function find132pattern(nums: number[]): boolean {
    const n = nums.length
    if (n < 3) return false

    let min = Number.MIN_SAFE_INTEGER
    let id = n

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < min) return true;

        while (id < n && nums[i] > nums[id]) {
            min = nums[id++]
        }

        nums[--id] = nums[i]
    }

    return false
};


