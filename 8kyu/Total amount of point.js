function points(games) {
    console.log(games)

    let pts = 0;
    for (let i = 0; i < games.length; i++) {
        console.log(games[i])
        console.log(games[i].split(':'))
        let kelvin = games[i].split(':')

        console.log(kelvin[0])
        console.log(Number(kelvin[1]))
        if (kelvin[0] > kelvin[1]) {
            pts += 3
        } else if (kelvin[0] === kelvin[1]) {
            pts += 1
        }
    }
    return pts
}