import summaryRanges from "../src/summaryRanges"

test("Test case 1", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7]))
        .toEqual(["0->2", "4->5", "7"])
})


test("Test case 2", () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
        .toEqual(["0", "2->4", "6", "8->9"])
})


test("Test case 3: this one wil getcha", () => {
    expect(summaryRanges([-1]))
        .toEqual(["-1"])
})
