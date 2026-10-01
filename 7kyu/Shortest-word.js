function findShort(s) {
    let small = s.split(" ")
    let est = small.reduce((longest, current) => {
        return current.length > longest.length ? longest : current;
    })
    return est.length
}