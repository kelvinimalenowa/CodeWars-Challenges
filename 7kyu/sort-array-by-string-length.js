function sortByLength(array) {
    // Return an array containing the same strings,
    // ordered from shortest to longest
    //parameters: an array

    //return: an ordered set of strings from shortest to longest

    //example: ["Telescopes", "Glasses", "Eyes", "Monocles"] --> ["Eyes", "Glasses", "Monocles", "Telescopes"]

    //psuedocode:

    //take length of string and sort words from shortest to longest
    return array.sort((a, b) => a.length - b.length)
}