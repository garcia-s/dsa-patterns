function getRow(rowIndex: number): number[] {
    if (rowIndex == 0) return [1]
    let res = [1, 1]


    for (let i = 2; i < rowIndex + 1; i++) {
        let cur = new Array(i + 1)
        cur[0] = cur[i] = 1
        for (let j = 1; j < i; j++) {
            cur[j] = res[j - 1] + res[j]
        }
        res = cur
    }
    return res
};

export default getRow
