//return the total number of smiling faces in the array
function countSmileys(arr) {
    //Parameter: smiley face as array
    //Return: total num of smiley faces in array
    //Example: countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
    //Psuedocode:

    //establish possible smiley face combinations
    let possCombos = [":)", ':D', ':-)', ':-D', ':~)', ':~D', ';)', ';D', ';-)', ';-D', ';~)', ';~D']

    //count how many instances of occurance
    let count = 0

    //loop instances, return number
    for (let i = 0; i <= arr.length; i++) {
        if (possCombos.includes(arr[i])) {
            count++
        }
    }
    return count;
}