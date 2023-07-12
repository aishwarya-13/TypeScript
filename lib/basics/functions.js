"use strict";
function add(a, b) {
    return a + b;
}
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
