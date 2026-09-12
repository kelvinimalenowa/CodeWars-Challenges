var number = function (busStops) {
    // Good Luck!
    const riders = busStops.map(stop => stop[0] - stop[1])
    return riders.reduce((sum, ride) => sum + ride, 0)
}