import addBinary from "../src/addBinary"

test("Test different sizes", () => {
    expect(addBinary("11", "1")).toBe("10101")
})
// Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"
//  
