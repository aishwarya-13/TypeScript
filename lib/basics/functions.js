"use strict";
let addMe;
//let addMe: (a: number, b: number) => number;
addMe = function (a, b) {
    return a + b;
};
// takes input as string and returns a number
function add(a, b) {
    return a + b;
}
// takes input as string and does not return anything so return type is void
function logMe(message) {
    console.log(message);
}
function sum(...values) {
    return values.reduce((prev, curr) => {
        return prev + curr;
    });
}
sum(1, 2);
sum(1, 2, 3);
