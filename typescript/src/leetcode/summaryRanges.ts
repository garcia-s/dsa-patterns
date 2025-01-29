
function summaryRanges(nums: number[]): string[] {
    if (nums.length == 1) return [nums[0].toString()]

    let s = 0
    let result: string[] = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + 1 != nums[i]) {
            result.push(s == i - 1 ?
                nums[i - 1].toString() :
                `${nums[s]}->${nums[i - 1]}`
            )
            s = i
        }
        if (i == nums.length - 1) {
            result.push(s == i ?
                nums[i].toString() :
                `${nums[s]}->${nums[i]}`
            )
        }
    }
    return result
};

export default summaryRanges
