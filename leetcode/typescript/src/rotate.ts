


function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
}


function rotate(nums: number[], k: number): void {
    //No rotations here 
    if (k === 0 || nums.length <= 1 || k % nums.length === 0)
        return

    const n = nums.length
    //If we do it to the right we 
    //just need to substract k to n to move the other way
    //
    k = n - (k % n)
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    reverse(nums, 0, n - 1);
};



export default rotate
