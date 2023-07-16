let exampleAny: any;
let exampleUnknown: unknown;

//any
exampleAny = 123;
exampleAny = "Hello World";

//unknown
exampleUnknown = 123;
exampleUnknown = "Hi TS";

//any
exampleAny.allows.anything.you.can.imagine();
let anysetBool: boolean = exampleAny;

//unknown
exampleUnknown.trim();
let unknownSetBoolean: boolean = exampleUnknown; //Error: Type 'unknown' is not assignable to type 'boolean'

if (typeof exampleUnknown == "string") {
  exampleUnknown.trim();
}

if (typeof exampleUnknown === "boolean") {
}

/**
 * Annotating it with 'any' will decrease the type safety
 */
// function log(value: any) {
//   console.log(value.toFixed(2));
// }

function log(value: unknown) {
  if (typeof value == "number") {
    console.log(value.toFixed(2));
  } else {
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
