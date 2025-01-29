function mySqrt(x: number): number {
    let l = 0
    let r = x

    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        if (m * m > x) r = m - 1
        else l = m + 1

    };
    return l - 1
}

