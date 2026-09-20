function findAverage(array) {
    console.log(array)
    // your code here
    let sum = array.reduce((acc, cur) => acc + cur, 0)
    let product = sum / array.length
    return array.length === 0 ? 0 : product
}