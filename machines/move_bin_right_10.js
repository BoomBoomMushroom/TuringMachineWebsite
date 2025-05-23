var states = [
    new State("0", "S", "S", "R", "CopyR10"),

    new State("CopyR10", "1", "1", "R", "Copy1R10"),
    new State("CopyR10", "0", "0", "R", "Copy0R10"),
    new State("CopyR10", "E", "E", "L", "HALT"),

    // Copy a 1
    new State("Copy1R10", "1", "1", "R", "Copy1R9"),
    new State("Copy1R10", "0", "0", "R", "Copy1R9"),
    new State("Copy1R10", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy1R9"),
    new State("Copy1R10", "E", "E", "R", "Copy1R9"),

    new State("Copy1R9", "1", "1", "R", "Copy1R8"),
    new State("Copy1R9", "0", "0", "R", "Copy1R8"),
    new State("Copy1R9", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy1R8"),
    new State("Copy1R9", "E", "E", "R", "Copy1R8"),
    
    new State("Copy1R8", "1", "1", "R", "Copy1R7"),
    new State("Copy1R8", "0", "0", "R", "Copy1R7"),
    new State("Copy1R8", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy1R7"),
    new State("Copy1R8", "E", "E", "R", "Copy1R7"),
    
    new State("Copy1R7", "1", "1", "R", "Copy1R6"),
    new State("Copy1R7", "0", "0", "R", "Copy1R6"),
    new State("Copy1R7", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy1R6"),
    new State("Copy1R7", "E", "E", "R", "Copy1R6"),
    
    new State("Copy1R6", "1", "1", "R", "Copy1R5"),
    new State("Copy1R6", "0", "0", "R", "Copy1R5"),
    new State("Copy1R6", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy1R5"),
    new State("Copy1R6", "E", "E", "R", "Copy1R5"),
    
    new State("Copy1R5", "1", "1", "R", "Copy1R4"),
    new State("Copy1R5", "0", "0", "R", "Copy1R4"),
    new State("Copy1R5", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy1R4"),
    new State("Copy1R5", "E", "E", "R", "Copy1R4"),
    
    new State("Copy1R4", "1", "1", "R", "Copy1R3"),
    new State("Copy1R4", "0", "0", "R", "Copy1R3"),
    new State("Copy1R4", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy1R3"),
    new State("Copy1R4", "E", "E", "R", "Copy1R3"),
    
    new State("Copy1R3", "1", "1", "R", "Copy1R2"),
    new State("Copy1R3", "0", "0", "R", "Copy1R2"),
    new State("Copy1R3", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy1R2"),
    new State("Copy1R3", "E", "E", "R", "Copy1R2"),
    
    new State("Copy1R2", "1", "1", "R", "Copy1R1"),
    new State("Copy1R2", "0", "0", "R", "Copy1R1"),
    new State("Copy1R2", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy1R1"),
    new State("Copy1R2", "E", "E", "R", "Copy1R1"),

    new State("Copy1R1", "1", "1", "R", "Left10"),
    new State("Copy1R1", "0", "1", "R", "Left10"),
    new State("Copy1R1", BLANK_CHARACTER, "1", "R", "Left10"),
    new State("Copy1R1", "E", "E", "R", "Left10"),

    // Copy a 0
    new State("Copy0R10", "1", "1", "R", "Copy0R9"),
    new State("Copy0R10", "0", "0", "R", "Copy0R9"),
    new State("Copy0R10", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy0R9"),
    new State("Copy0R10", "E", "E", "R", "Copy0R9"),

    new State("Copy0R9", "1", "1", "R", "Copy0R8"),
    new State("Copy0R9", "0", "0", "R", "Copy0R8"),
    new State("Copy0R9", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy0R8"),
    new State("Copy0R9", "E", "E", "R", "Copy0R8"),
    
    new State("Copy0R8", "1", "1", "R", "Copy0R7"),
    new State("Copy0R8", "0", "0", "R", "Copy0R7"),
    new State("Copy0R8", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy0R7"),
    new State("Copy0R8", "E", "E", "R", "Copy0R7"),
    
    new State("Copy0R7", "1", "1", "R", "Copy0R6"),
    new State("Copy0R7", "0", "0", "R", "Copy0R6"),
    new State("Copy0R7", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy0R6"),
    new State("Copy0R7", "E", "E", "R", "Copy0R6"),
    
    new State("Copy0R6", "1", "1", "R", "Copy0R5"),
    new State("Copy0R6", "0", "0", "R", "Copy0R5"),
    new State("Copy0R6", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy0R5"),
    new State("Copy0R6", "E", "E", "R", "Copy0R5"),
    
    new State("Copy0R5", "1", "1", "R", "Copy0R4"),
    new State("Copy0R5", "0", "0", "R", "Copy0R4"),
    new State("Copy0R5", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy0R4"),
    new State("Copy0R5", "E", "E", "R", "Copy0R4"),
    
    new State("Copy0R4", "1", "1", "R", "Copy0R3"),
    new State("Copy0R4", "0", "0", "R", "Copy0R3"),
    new State("Copy0R4", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy0R3"),
    new State("Copy0R4", "E", "E", "R", "Copy0R3"),
    
    new State("Copy0R3", "1", "1", "R", "Copy0R2"),
    new State("Copy0R3", "0", "0", "R", "Copy0R2"),
    new State("Copy0R3", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy0R2"),
    new State("Copy0R3", "E", "E", "R", "Copy0R2"),
    
    new State("Copy0R2", "1", "1", "R", "Copy0R1"),
    new State("Copy0R2", "0", "0", "R", "Copy0R1"),
    new State("Copy0R2", BLANK_CHARACTER, BLANK_CHARACTER, "R", "Copy0R1"),
    new State("Copy0R2", "E", "E", "R", "Copy0R1"),

    new State("Copy0R1", "1", "0", "R", "Left10"),
    new State("Copy0R1", "0", "0", "R", "Left10"),
    new State("Copy0R1", BLANK_CHARACTER, "0", "R", "Left10"),
    new State("Copy0R1", "E", "E", "R", "Left10"),


    // go back to the value to copy
    
    new State("Left10", "1", "1", "L", "Left9"),
    new State("Left10", "0", "0", "L", "Left9"),
    new State("Left10", BLANK_CHARACTER, BLANK_CHARACTER, "L", "Left9"),
    new State("Left10", "E", "E", "L", "Left9"),

    new State("Left9", "1", "1", "L", "Left8"),
    new State("Left9", "0", "0", "L", "Left8"),
    new State("Left9", BLANK_CHARACTER, BLANK_CHARACTER, "L", "Left8"),
    new State("Left9", "E", "E", "L", "Left8"),

    new State("Left8", "1", "1", "L", "Left7"),
    new State("Left8", "0", "0", "L", "Left7"),
    new State("Left8", BLANK_CHARACTER, BLANK_CHARACTER, "L", "Left7"),
    new State("Left8", "E", "E", "L", "Left7"),

    new State("Left7", "1", "1", "L", "Left6"),
    new State("Left7", "0", "0", "L", "Left6"),
    new State("Left7", BLANK_CHARACTER, BLANK_CHARACTER, "L", "Left6"),
    new State("Left7", "E", "E", "L", "Left6"),

    new State("Left6", "1", "1", "L", "Left5"),
    new State("Left6", "0", "0", "L", "Left5"),
    new State("Left6", BLANK_CHARACTER, BLANK_CHARACTER, "L", "Left5"),
    new State("Left6", "E", "E", "L", "Left5"),

    new State("Left5", "1", "1", "L", "Left4"),
    new State("Left5", "0", "0", "L", "Left4"),
    new State("Left5", BLANK_CHARACTER, BLANK_CHARACTER, "L", "Left4"),
    new State("Left5", "E", "E", "L", "Left4"),

    new State("Left4", "1", "1", "L", "Left3"),
    new State("Left4", "0", "0", "L", "Left3"),
    new State("Left4", BLANK_CHARACTER, BLANK_CHARACTER, "L", "Left3"),
    new State("Left4", "E", "E", "L", "Left3"),

    new State("Left3", "1", "1", "L", "Left2"),
    new State("Left3", "0", "0", "L", "Left2"),
    new State("Left3", BLANK_CHARACTER, BLANK_CHARACTER, "L", "Left2"),
    new State("Left3", "E", "E", "L", "Left2"),

    new State("Left2", "1", "1", "L", "Left1"),
    new State("Left2", "0", "0", "L", "Left1"),
    new State("Left2", BLANK_CHARACTER, BLANK_CHARACTER, "L", "Left1"),
    new State("Left2", "E", "E", "L", "Left1"),

    new State("Left1", "1", "1", "L", "CopyR10"),
    new State("Left1", "0", "0", "L", "CopyR10"),
    new State("Left1", BLANK_CHARACTER, BLANK_CHARACTER, "L", "CopyR10"),
    new State("Left1", "E", "E", "L", "CopyR10"),
]
