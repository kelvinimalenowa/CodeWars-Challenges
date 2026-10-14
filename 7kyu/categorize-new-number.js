function openOrSenior(data) {
    // ...
    //Parameters: data as a pair. includes age and handicap level
    //Return: "Open" or "Senior"
    //Example: input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
    //         output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

    //user enters a pair of numbers

    //if first number is 55 or older, they are senior

    //if second number is 8 or more, they are senior

    //return a string saying senior if both cases are true, otherwise open
    return data.map(([a, b]) => {
        if (a >= 55 && b > 7) {
            return "Senior"
        } else {
            return "Open"
        }
    })
}