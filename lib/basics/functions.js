"use strict";
let add;
add = function (a, b) {
    return a + b;
};
// function add(a: number, b: number): number {
//   return a + b;
// }
function log(message) {
    console.log(message);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
sum(1, 2);
sum(1, 2, 3);
