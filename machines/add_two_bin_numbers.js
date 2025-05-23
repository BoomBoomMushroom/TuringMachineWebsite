var states = [
    // https://stackoverflow.com/questions/59045832/turing-machine-for-addition-and-comparison-of-binary-numbers
    // Move right to end of first block
    new State("0", "0", "0", "R", "0"),
    new State("0", "1", "1", "R", "0"),
    new State("0", BLANK_CHARACTER, BLANK_CHARACTER, "R", "1"),

    // Move right to end of second block
    new State("1", "0", "0", "R", "1"),
    new State("1", "1", "1", "R", "1"),
    new State("1", BLANK_CHARACTER, BLANK_CHARACTER, "L", "2"),

    // Subtract one in binary
    new State("2", "0", "1", "L", "2"),
    new State("2", "1", "0", "L", "3"),
    new State("2", BLANK_CHARACTER, BLANK_CHARACTER, "R", "5"),

    // Move left to end of first block
    new State("3", "0", "0", "L", "3"),
    new State("3", "1", "1", "L", "3"),
    new State("3", BLANK_CHARACTER, BLANK_CHARACTER, "L", "4"),

    // Add one in binary
    new State("4", "0", "1", "R", "0"),
    new State("4", "1", "0", "L", "4"),
    new State("4", BLANK_CHARACTER, "1", "R", "0"),

    // Clean up
    new State("5", "1", BLANK_CHARACTER, "R", "5"),
    new State("5", BLANK_CHARACTER, BLANK_CHARACTER, "HALT", "HALT"),
]