import { RedBlackTree } from "../../src/structures/red-black-tree"

describe("Red-Black Tree", () => {
    let tree: RedBlackTree<number>

    beforeEach(() => {
        tree = new RedBlackTree<number>(
            (a, b) => a - b
        )
    })


    test("Should insert the item", () => {
        tree.insert(10)
        expect(tree.root?.value).toBe(10)
    })

    test("Should insert elements and maintain Red-Black properties", () => {
        tree.insert(10)
        tree.insert(20)
        tree.insert(30)
        tree.insert(15)
        tree.insert(25)

        const root = tree.root
        expect(root).not.toBeNull()
        expect(root?.isRed).toBeFalsy()
    })

    test("Should maintain binary search order", () => {

        tree.insert(10)
        tree.insert(5)
        tree.insert(15)


        expect(tree.root?.value).toBe(10)
        expect(tree.root?.left?.value).toBe(5)
        expect(tree.root?.right?.value).toBe(15)

    })

    test("Should rotate to rebalance the tree after insertion", () => {
        tree.insert(10)
        tree.insert(20)
        tree.insert(30) // Should trigger a rotation

        const root = tree.root
        // Rotation should make 20 the root
        expect(root?.value).toBe(20)
        expect(root?.left?.value).toBe(10)
        expect(root?.right?.value).toBe(30)
    })


    test("Should correctly find inserted values", () => {
        tree.insert(15)
        tree.insert(10)
        tree.insert(5)

        expect(tree.find(10)?.value).toBe(10)
        expect(tree.find(5)?.value).toBe(5)
        expect(tree.find(15)?.value).toBe(15)
    })

    test("should return null for missing values", () => {
        tree.insert(10)
        tree.insert(5)
        tree.insert(15)

        expect(tree.find(100)).toBeNull()
    })
})
