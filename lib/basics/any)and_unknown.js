"use strict";
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
let anysetBool = exampleAny;
//unknown
exampleUnknown.trim();
let unknownSetBoolean = exampleUnknown; //Error: Type 'unknown' is not assignable to type 'boolean'
if (typeof exampleUnknown == "string") {
    exampleUnknown.trim();
}
if (typeof exampleUnknown === "boolean") {
}
