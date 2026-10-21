function getCount(str) {
    //params: a given string (str)
    //return: a number 
    //example: should return 5 for 'abracadabra'

    //establish a count
    let count = 0
    //establish vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //loop through each letter in string
    for (let i = 0; i < str.length; i++) {
        //if looped letter matches a vowel, increment count
        if (vowels.includes(str[i])) {
            count++
        }
    }
    //return count
    return count
}