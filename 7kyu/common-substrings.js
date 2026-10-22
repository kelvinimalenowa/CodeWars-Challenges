function substringTest(str1, str2) {
    // Code goes here!
    //parameters: two strings containing a word
    //return: true or false
    //example: "something" and "home" should return "true" because they share "me"
    //         "bedrest" and "sugar" should return false because it doesn't share a substring

    //psuedocode:

    //loop through each string to find a substring

    //determine if consecutive letters(substring) are found

    let var1 = gettingSubs(str1)
    let var2 = gettingSubs(str2)

    return var1.some(x => var2.includes(x))
}

//creating a function to pull all possible substrings in each string
function gettingSubs(inStr) {
    let array = []
    for (let i = 0; i < inStr.length; i++) {
        for (let j = 2 + i; j <= inStr.length; j++) {
            let newStrings = inStr.substring(i, j).toLowerCase()
            array.push(newStrings)
        }
    }
    return array
}