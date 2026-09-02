function abbrevName(name){

    // code away
let firstInit = name.split(" ")[0][0].toUpperCase()
let secondInit = name.split(" ")[1][0].toUpperCase()

return firstInit + "." + secondInit
}