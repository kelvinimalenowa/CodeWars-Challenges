function getDivisorsCnt(n) {
    // todo
    //parameters: n
    //return: number of divisors
    //example: 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12

    //return the amount of numbers n is divisible by

    let count = 0

    //we're looping to get numbers 1 through n to see if said numbers can divide through n evenly
    for (let i = 1; i <= n; i++) {
        //can 1 divide n evenly
        if (n % i === 0) {
            count++
        }
    }
    return count
}