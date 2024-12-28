
//Using an arithmetic series here is faster than an xor
//I don't really know why.
//For some reason it's like that

function missingNumber(nums: number[]): number {
    const n = nums.length
    let total = (n * (n + 1)) / 2
    for (let i = 0; i < nums.length; i++) {
        total -= nums[i]
    }
    return total
};

export default missingNumber
