function squareSum(numbers) {
    //params: numbers
    //return: sum of each number
    //example: [1, 2, 2] returns 9

    //square each number in array
    const squared = numbers.map((num) => num * num)
    //add each squared number
    const sum = squared.reduce((acc, curVal) => { return acc + curVal }, 0)
    //return sum
    return sum
}