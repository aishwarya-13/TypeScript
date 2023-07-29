"use strict";
let point__;
function initialize() {
    point__ = { x: 0, y: 0 };
}
initialize();
/**
 * The reason for this error is because TS does not do deep code flow analysis and does not understand the impact
 * of calling initialize() and so it says that point may or may not be undefined
 * But we know that it cannot be undefined
 * We can help TS understand this fact using non-null assertion !
 */
console.log("After initialized", point__.x, point__.y); //Error:Variable 'point__' is used before being assigned.
console.log("After initialized", point__.x, point__.y); //using non-null assertion
