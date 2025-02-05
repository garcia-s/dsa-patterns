
export class TreeNode<T> {
    left?: TreeNode<T>;
    right?: TreeNode<T>;
    value: T


    constructor(val: T) {
        this.value = val;
    }
}

/**
* This is an implementation of a Binary Search Tree.
* A data structure known for having everything bigger than the current node on one side 
* And everything smaller than the current node on the other
* This is not a self balancing structure, we'll cover those later
**/
export default class BinarySearchTree<T> {


    /**
    * The root of the tree, the first node  
    **/
    root?: TreeNode<T>;

    /**
    * A function used to know which of the items is inserted to 
    * the left and which one to the right
    **/
    compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare
    }


    find(cb: (current: T) => number): T | null {
        if (!this.root) return null
        let curr = this.root
        let res = cb(curr.value)

        while (res != 0) {
            if (res > 0) {
                if (!curr.left) return null;
                curr = curr.left
                res = cb(curr.value)
                continue
            }

            if (!curr.right) return null;
            curr = curr.right
            res = cb(curr.value)
        }

        return curr.value;
    }

    insert(data: T) {
        if (this.root == undefined) {
            this.root = new TreeNode<T>(data);
            return
        }

        let curr = this.root

        while (true) {
            const res = this.compare(curr.value, data)
            if (res > 0) {
                if (curr.left == undefined) {
                    curr.left = new TreeNode(data)
                    return;
                }
                curr = curr.left;
                continue
            }
            if (curr.right == undefined) {
                curr.right = new TreeNode(data)
                return;
            }
            curr = curr.right
        }
    }


    inOrderTraversal(cb: (val: T) => void) {
        this._inOrderTraversal(cb, this.root)
    }

    private _inOrderTraversal(cb: (a: T) => void, node?: TreeNode<T>) {
        if (!node) return
        this._inOrderTraversal(cb, node.left)
        cb(node.value)
        this._inOrderTraversal(cb, node.right);
    }


    preOrderTraversal(cb: (val: T) => void) {
        this._preOrderTraversal(cb, this.root)
    }

    private _preOrderTraversal(cb: (a: T) => void, node?: TreeNode<T>) {
        if (!node) return
        cb(node.value)
        this._preOrderTraversal(cb, node.left)
        this._preOrderTraversal(cb, node.right);
    }

    postOrderTraversal(cb: (val: T) => void) {
        this._postOrderTraversal(cb, this.root)
    }

    private _postOrderTraversal(cb: (a: T) => void, node?: TreeNode<T>) {
        if (!node) return
        this._postOrderTraversal(cb, node.left)
        this._postOrderTraversal(cb, node.right);
        cb(node.value)
    }
}
