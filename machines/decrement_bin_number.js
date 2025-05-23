var states = [
    // find the right most bit
    new State("0", "0", "0", "R", "0"),
    new State("0", "1", "1", "R", "0"),
    new State("0", BLANK_CHARACTER, BLANK_CHARACTER, "L", "1"),

    // replace all the zeros to ones, until we hit a one
    new State("1", "0", "1", "L", "1"),
    new State("1", "1", "0", "L", "2"),
    new State("1", BLANK_CHARACTER, BLANK_CHARACTER, "L", "2"),

    // go to right of value
    new State("2", "0", "0", "L", "2"),
    new State("2", "1", "1", "L", "2"),
    new State("2", BLANK_CHARACTER, BLANK_CHARACTER, "R", "HALT"),
]