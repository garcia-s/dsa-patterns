
class RBTreeNode<T> {
    value: T
    isRed: boolean
    left?: RBTreeNode<T>
    right?: RBTreeNode<T>
    parent?: RBTreeNode<T>


    constructor(value: T, isRed: boolean = true, parent?: RBTreeNode<T>) {
        this.value = value
        this.isRed = isRed
        this.parent = parent
    }
}

export class RedBlackTree<T> {
    private _compare: (a: T, b: T) => number
    private _root?: RBTreeNode<T>;

    constructor(compare: (a: T, b: T) => number) {
        this._compare = compare;
    }


    get root() {
        return this._root
    }


    find(value: T): RBTreeNode<T> | null {
        let node = this._root;

        while (node) {
            const res = this._compare(value, node.value)
            if (res == 0) return node;
            node = res < 0 ? node.left : node.right
        }

        // Not found
        return null;
    }

    insert(val: T) {
        let node = this._root
        let parent: RBTreeNode<T> | null = null;

        if (!node) {
            // Root is always black, so we insert a black node
            this._root = new RBTreeNode<T>(val, false)
            return;
        }


        while (node) {
            parent = node;
            node = this._compare(val, node.value) < 0 ?
                node.left :
                node.right
        }

        const newNode = new RBTreeNode<T>(val)
        newNode.parent = parent!;

        this._compare(val, parent!.value) < 0 ?
            parent!.left = newNode :
            parent!.right = newNode


        this.fixInsert(newNode);
    }


    remove() { }

    private fixInsert(node: RBTreeNode<T>) {
        while (node.parent && node.parent.isRed) {
            const isParentLeft = node.parent == node.parent.parent?.left
            const uncle = isParentLeft ?
                node.parent.parent?.right :
                node.parent.parent?.left
            // If uncle is red we recolor
            if (uncle && uncle.isRed) {
                //Repaint parent to black
                node.parent.isRed = false
                //Repaint uncle to black
                uncle.isRed = false
                //Repaint grandparent to red and move to grandparent
                node = node.parent.parent!
                node.isRed = true
                continue
            }

            if (isParentLeft && node == node.parent.right) {
                node = node.parent
                //Rotate left
                this.rotate(node, false)
            }

            if (!isParentLeft && node == node.parent!.left) {
                // Rotate right
                node = node.parent!
                this.rotate(node)
            }


            node.parent!.isRed = false
            node.parent!.parent!.isRed = true
            this.rotate(node.parent!.parent!, isParentLeft)
        }

        this._root!.isRed = false
    }


    private rotate(node: RBTreeNode<T>, right: boolean = true) {

        const [forward, back] = right ?
            ["right", "left"] :
            ["left", "right"]

        const tmp = node[back];
        //Nothing to do then

        if (!tmp) return;
        //The left node of the right child we move it into the node as a the new right node
        node[back] = tmp[back];

        //We update the parent
        if (tmp[forward]) tmp[forward].parent = node;

        //We update the parent of the right node
        tmp.parent = node.parent;

        // If node doesn't have a parent it is the root so the new root is right
        if (!node.parent) {
            this._root = tmp;
            // Then we move the node to the left
            tmp[forward] = node;
            node.parent = tmp;
            return
        }

        // We update If it has a parent we check if it's a left parent
        node === node.parent[forward] ?
            node.parent[forward] = tmp :
            node.parent[back] = tmp;

        tmp[forward] = node;
        node.parent = tmp;
    }
}
