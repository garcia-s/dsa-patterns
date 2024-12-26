class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function sortedArrayToBST(nums: number[]): TreeNode | null {
    return helper(nums, 0, nums.length - 1)
};

function helper(nums: number[], lo: number, hi: number): TreeNode | null {
    if (lo > hi) return null
    const mid = lo + Math.round((hi - lo) / 2)
    const root = new TreeNode(nums[mid])
    root.left = helper(nums, lo, mid - 1)
    root.right = helper(nums, mid + 1, hi)
    return root
}
