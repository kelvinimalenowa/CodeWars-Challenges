function reverseWords(str) {
    //parameters: a string containing a sentence
    //return: that same string, but reversed
    //example: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
    //psuedocode:
    //we want to split each word in the sentence
    let sep = str.split(" ")
    //reverse the order of the sentence
    let rev = sep.reverse()
    //join the sentence back together
    let join = rev.join(" ")
    //return it
    return join; // reverse those words
}