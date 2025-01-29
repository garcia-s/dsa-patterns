class NumArray {

    private prefix: number[]
    constructor(nums: number[]) {

        //Length + 1 because we need to offset the array 
        //So we don't suffer when we call zero
        //
        this.prefix = new Array(nums.length + 1).fill(0);
        this.prefix[0] = nums[0]
        for (let i = 0; i < this.prefix.length; i++) {
            this.prefix[i + 1] = nums[i] + this.prefix[i]
        }

        console.log(this.prefix)
    }

    sumRange(left: number, right: number): number {
        return this.prefix[right + 1] - this.prefix[left]
    }
}

export default NumArray

