"use strict";
/**
 * To make sure only 'North' is assigned to variable direction.
 * To achieve this use literal type
 * In literal type TS allows you to use any string in a type position
 */
/**
 * using string in type position allows only 'North' value to be assigned. Any other value will cause error
 */
//let direction: string;
let direction;
//only value that can be assigned to this variable is this literal variable 'North'
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
