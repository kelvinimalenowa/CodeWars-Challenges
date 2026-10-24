function oddOrEven(array) {
    //enter code here
    //parameter: an array of integers
    //return: a string telling "even" or "odd"
    //example: input[0]
    //output: :"even"

    //input[0, 1, 4]
    //output: odd

    //reduce all the integers in the array
    //let result = array.reduce((acc, cv) => acc + cv, 0)

    //   if (result % 2 === 0){
    //     return "even"
    //   } else {
    //   //return a string saying odd if modulator is 1
    //     return "odd"
    //   }

    let total = 0
    for (let i = 0; i <= array.length; i++) {
        total + array[i]
    }
    return result % 2 === 0 ? "even" : "odd"
}