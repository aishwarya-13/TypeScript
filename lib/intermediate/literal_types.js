"use strict";
//let direction: string;
let direction;
////only value that can be assigned to this variable is this literal variable 'North'
direction = "North";
direction = "n0r7h"; //Type '"n0r7h"' is not assignable to type '"North"'
//literal types is used with Union
//d can have values 'North' 'South' 'East' 'West'
let d;
d = "East";
let dire;
dire = "South";
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
if (rollDice() === 7) {
    throw new Error("Not possible");
}
