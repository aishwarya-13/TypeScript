"use strict";
/**
 * Any and unknown are super tyoes in TS
 * This means all types of variables can be assigned to something that is any and same is true for unknown
 *
 * Any is like a escape hatch in type system. It gives you complete freedom to do anything you want with the variable
 * It allows you to completely bypass the type system
 * Any variable can be assigned to well-defined type
 *
 * Unknown is different
 * You cannot access any properties on it and cannot assign to well-defined types
 * If you want to use a unknown type variable as a string you have to check if it is a string
 * If you want to use it as a boolean you have to check if it is a boolean
 * So unknown is more type safe version of any
 * It allows free access to all types within type system but also in safe manner
 */
let exampleAny;
let exampleUnknown;
//any
exampleAny = 123;
exampleAny = "Hello World";
//unknown
exampleUnknown = 123;
exampleUnknown = "Hi TS";
//any
exampleAny.allows.anything.you.can.imagine();
let anysetBool = exampleAny; //can assign to well-defined type
//unknown
exampleUnknown.trim();
let unknownSetBoolean = exampleUnknown; //Error: Type 'unknown' is not assignable to type 'boolean'
//If you want to use a unknown type variable as a string you have to check if it is a string
if (typeof exampleUnknown == "string") {
    exampleUnknown.trim();
}
//If you want to use it as a boolean you have to check if it is a boolean
if (typeof exampleUnknown === "boolean") {
}
/**
 * Annotating it with 'any' will decrease the type safety
 */
// function log(value: any) {
//   console.log(value.toFixed(2));
// }
function log(value) {
    if (typeof value == "number") {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
/**
 * Now this will blow up because line 5 will work for only a number
 * (the body of function is unsafe for anything other than a number)
 * This is how an inexperienced developer will do it
 *
 * The recommended way to accept all the values within function with type safety
 * is to use the unknown type.
 * Externally your function still accepts all values just like any but internally
 * in the function you get type safety errors when trying to use variables in an unsafe manner.
 * So you have to check for the type
 */
log(123.89);
log("Hello world!");
