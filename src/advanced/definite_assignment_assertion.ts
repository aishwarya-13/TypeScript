/**
 * Using non-null assertion at the point of declaration gets rid of the below error.
 * This is called definite assignment assertion
 */

let dice!: number;

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}

rollDice();

console.log("Current dice value", dice); //Error: Variable 'dice' is used before being assigned.

//console.log("Current dice value", dice!);
