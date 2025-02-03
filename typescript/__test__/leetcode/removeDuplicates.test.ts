import removeDuplicates from "../../src/leetcode/removeDuplicates"


test("Removing single duplicate", () => {
    const arr = [1, 1, 1, 2, 2]
    const k = removeDuplicates(arr)
    const answ = [1, 1, 2, 2]
    for (let i = 0; i < answ.length; i++) {
        expect(arr[i]).toBe(answ[i])
    }
    expect(k).toBe(4)
})

test("Removing multiple duplicates", () => {
    const arr = [0, 0, 1, 1, 1, 1, 2, 3, 3]
    const k = removeDuplicates(arr)
    const answ = [0, 0, 1, 1, 2, 3, 3]
    for (let i = 0; i < answ.length; i++) {
        expect(arr[i]).toBe(answ[i])
    }
    expect(k).toBe(7)
})

