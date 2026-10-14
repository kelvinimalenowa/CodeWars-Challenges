function friend(friends) {
    //your code here
    //Parameters: group of friends names
    //Return: names with 4 letters only
    //Example: Input = ["Ryan", "Kieran", "Jason", "Yous"]
    //         Output = ["Ryan", "Yous"]

    //Psuedocode:

    //receive a list of friends
    return friends.filter((name) => name.length === 4)
    //check to see if friend names contains 4 letters

    //return array with only 4 letters
}