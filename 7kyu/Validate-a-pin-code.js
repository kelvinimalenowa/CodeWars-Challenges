function validatePIN(pin) {
    //return true or false
    // If pin is more than 4 or 6 digits, return false
    console.log(pin)
    if (pin.length === 4 || pin.length === 6) {
        return /^[0-9]+$/.test(pin)
    } else {
        return false
    }
}