// My intuition here was on point, using a Heap.
// However a 1-depth heap is just 3 VARIABLES JUAN.
// So you got all confused because using an array 
// Is way harder and null/undefined in js is cursed.
// So you got it wrong three times for no reason. DO BETTER.

function thirdMax(nums: number[]): number {
    if (nums.length == 1) return nums[0]
    const heap = new Array(3)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == heap[0] ||
            nums[i] == heap[1] ||
            nums[i] == heap[2]) continue

        if (heap[0] == undefined || nums[i] > heap[0]) {
            heap[1] = heap[2]
            heap[2] = heap[0]
            heap[0] = nums[i]
            continue
        }

        if (heap[0] == undefined || nums[i] > heap[2]) {
            heap[1] = heap[2]
            heap[2] = nums[i]
            continue
        }

        if (heap[1] == undefined || nums[i] > heap[1]) {
            heap[1] = nums[i]
        }
    }

    if (heap[1] == undefined) return heap[1]
    return heap[0]
};
