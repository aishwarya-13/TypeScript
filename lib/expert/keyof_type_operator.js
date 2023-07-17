"use strict";
const a = {
    name: "A",
    age: 30,
    location: "Chicago",
};
//General function
function logGet(obj, key) {
    const value = obj[key];
    console.log("Getting", key, value);
    return value;
}
//function logGet(obj: any, key: "name" | "age" | "location") {
// function logGet(obj: Person_, key: PersonKeys) {
//   const value = obj[key];
//   console.log("Getting", key, value);
//   return value;
// }
let age = logGet(a, "age");
function logSet(obj, key, value) {
    console.log("Setting:", key, value);
    obj[key] = value;
}
logSet(a, "age", 36);
