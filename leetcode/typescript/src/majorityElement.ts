
function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count++;
            continue
        }

        if (candidate === nums[i]) {
            count++;
            continue
        }

        count--;
    };
    return candidate
}
export default majorityElement
