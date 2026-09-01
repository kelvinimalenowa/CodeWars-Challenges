function past(h, m, s){
  //#Happy Coding! ^_^
  //Convert hours to milliseconds
  let hr = h * 3600000
  //Convert minutes to milliseconds
  let min = m * 60000
  //Convert seconds to milliseconds
  let sec = s * 1000
  //Add the calculations together 
  let total = hr + min + sec
  //Return the total
  return total
}
