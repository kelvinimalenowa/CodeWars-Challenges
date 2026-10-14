function updateLight(current) {

    //your code here!
    //parameters: current state of the light
    //return: what the next light should be
    //example: if input is green, output should be yellow
    //psuedocode:

    //a line of code that says if the input is green, output should be yellow
    if (current == 'green') {
        return 'yellow'
    }
    //a line of code that says if the input is yellow, output should be red
    if (current == 'yellow') {
        return 'red'
    }
    //a line of code that says if the input is red, output should be green
    if (current == 'red') {
        return 'green'
    }
}