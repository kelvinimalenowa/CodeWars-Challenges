function descendingOrder(n) {
    //...
    
    const array = String(n).split('')
    console.log(array)
    const bill = array.sort((a, b) => b - a)
    console.log(bill)
    return Number(bill.join(""))

}