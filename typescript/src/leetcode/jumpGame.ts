
//What???
//This is just a greedy algo? IDK if this is a greedy algo
//but this is pretty clever
function canJump(nums: number[]): boolean {
    let steps = 0
    for (let i = 0; i < nums.length; i++) {
        if (steps < 0) return false
        if (nums[i] > steps) steps = steps[i]
        steps -= 1
    }

    return true
};
