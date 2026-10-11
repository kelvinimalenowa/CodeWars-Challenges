function positiveSum(arr) {
    //Parameters: an array (arr)
    //Return: the sum of foo positive numbers
    //Example: [1, -4, 7, 12] => 1+7+12=20
    //Psuedocode:
    //remove negative numbers from array 
    const positive = arr.filter(num => num > 0)

    //reduce all numbers in array
    return positive.reduce((acc, cur) => acc + cur, 0)
}