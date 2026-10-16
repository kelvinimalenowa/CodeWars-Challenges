function longest(s1, s2) {
    // your code
    //params: s1 & s2
    //return: individual characters in both strings sorted, with duplicates removed
    //examples: shown 
    //psuedocode:

    //remove duplicate letters in each string and combine
    const step1 = [...new Set(s1 + s2)]   //[...] turns the set into an array
    //sort the array alphabetically
    const step2 = step1.sort()
    //convert the array back into a string
    const step3 = step2.join('')
    //return the string
    return step3
}