

export function arrayCompare(a: any[], b: any[]): boolean {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true
}


export function objectCompare(a: Object, b: Object) {
    const ak = Object.keys(a)
    const bk = Object.keys(b)
    if (ak.length != bk.length) return false;

    for (let i = 0; i < ak.length; i++) {
        if (a[ak[i]] !== b[bk[i]]) return false
    }
    return true
}
