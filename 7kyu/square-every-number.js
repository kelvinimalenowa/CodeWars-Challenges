function squareDigits(num) {
    //square the number being inputed
    console.log(num)
    //3212 <- square each digit
    const array = String(num).split('')
    //square each num in array
    const mapped = array.map((number) => number ** 2)
    //join the squared numbers
    console.log(typeof Number(mapped.join('')))
    return Number(mapped.join(''))
}