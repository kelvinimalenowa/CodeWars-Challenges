function toAcronym(inp) {
    // ...
    return (inp.split(" ").map((inp) => inp.charAt(0).toUpperCase()).join(""))
}