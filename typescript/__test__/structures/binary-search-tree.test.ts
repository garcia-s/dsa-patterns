import BinarySearchTree from "../../src/structures/binary-search-tree"

describe("Binary search tree tests", () => {

    let bst: BinarySearchTree<number>;

    beforeEach(() => {
        bst = new BinarySearchTree<number>(
            (a, b) => a - b
        )
    })

    test("Should traverse in order", () => {
        //Arrange
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(17);

        //Assert
        let arr: number[] = []
        bst.inOrderTraversal((v) => arr.push(v))

        expect(arr).toEqual([3, 5, 7, 10, 12, 15, 17])
    })

    test("Should find an existing item or return nul", () => {
        //Arrange
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);

        //Assert

        expect(bst.find((v) => v - 20)).toBeNull();
        expect(bst.find((v) => v - 15)).toBe(15);
    })

    test("Should traverse in pre-order", () => {
        //Arrange
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(17);

        //Assert
        let arr: number[] = []
        bst.preOrderTraversal((v) => arr.push(v))
        expect(arr).toEqual([10, 5, 3, 7, 15, 12, 17])
    })

    test("Should traverse in post-order", () => {
        //Arrange
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(17);

        //Assert
        let arr: number[] = []
        bst.postOrderTraversal((v) => arr.push(v))
        expect(arr).toEqual([3, 7, 5, 12, 17, 15, 10])
    })

})

