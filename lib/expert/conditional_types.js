"use strict";
/**
 * It takes a type of generic input stored it in type T and then checks if type T extends to type number
 * and if condition is true return the literal type 'number' or literal type 'other'
 * They are called conditional types because they use the ternary operator
 */
const isNumber = (value) => typeof value == "number" ? "number" : "other";
const withNumber = isNumber(123);
const withOther = isNumber("hello");
