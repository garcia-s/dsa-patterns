function generate(numRows: number): number[][] {
    const result = new Array(numRows)
    result[0] = [1]
    if (numRows == 1) return result

    result[1] = [1, 1]
    if (numRows == 2) return result

    for (let i = 2; i < numRows; i++) {
        const cur = new Array(i + 1).fill(1)
        for (let j = 1; j < i; j++) {
            cur[j] = result[i - 1][j - 1] + result[i - 1][j]
        }
        result[i] = cur
    }
    return result
};

export default generate
