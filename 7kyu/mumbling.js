function accum(s) {
    // your code
    //parameters: a string
    //return: that same string, with each following character increasing in count. each first letter is capitalized
    //example: accumulation("abcd") -> A-Bb-Ccc-Dddd
    //psuedocode:

    //hold result of for loop
    let ret = [];
    //separate each char in string
    const sep = s.split('');
    //loop thru string, increase count of each letter
    for (let i = 0; i < s.length; i++) {
        let repeatedChar = sep[i].repeat(i).toLowerCase()
        //capitalize the first char
        let uppercase = sep[i].toUpperCase()
        let final = uppercase + repeatedChar
        console.log(final)
        ret.push(final)
    }
    //join them together with a dash in between each letter
    return ret.join("-")
}