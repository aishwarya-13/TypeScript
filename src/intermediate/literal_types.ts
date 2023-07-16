//let direction: string;
let direction: "North";

////only value that can be assigned to this variable is this literal variable 'North'
direction = "North";
direction = "n0r7h"; //Type '"n0r7h"' is not assignable to type '"North"'

//literal types is used with Union
//d can have values 'North' 'South' 'East' 'West'
let d: "North" | "South" | "East" | "West";
d = "East";

//Extract this named type alias in a type
type CardinalDirection = "North" | "South" | "East" | "West";
let dire: CardinalDirection;
dire = "South";

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

if (rollDice() === 7) {
  throw new Error("Not possible");
}
