function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let average = classPoints.reduce((num, sum) => num + sum, 0) / classPoints.length
    console.log(average)
    if (average < yourPoints) {
        return true
    } else {
        return false
    }
}
