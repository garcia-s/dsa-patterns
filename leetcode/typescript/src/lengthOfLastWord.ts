


function lengthOfLastWord(s: string): number {
    let c = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            c += 1
            continue
        }

        if (c > 0) return c
    }
    return c
};
