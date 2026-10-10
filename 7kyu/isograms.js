function isIsogram(str) {

    // Convert the input string to lowercase to ignore capitalization
    let cleaned = str.toLowerCase();

    // Loop through each character in the lowercase string
    for (let i = 0; i < cleaned.length; i++) {

        // Check if the first and last occurrence of the current character are different
        if (cleaned.indexOf(cleaned[i]) !== cleaned.lastIndexOf(cleaned[i])) {

            // If a repeated character is found, return false
            return false;
        }
    }

    // If the loop finishes without finding duplicates, return true
    return true;
}