type Person_ = {
  name: string;
  age: number;
  location: string;
};

const a: Person_ = {
  name: "A",
  age: 30,
  location: "Chicago",
};

/**
 * keyof type operator takes a type as input and returns the union of the keys from that type
 */
type PersonKeys = keyof Person_; //is same as key: "name" | "age" | "location"

//General function
function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
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

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log("Setting:", key, value);
  obj[key] = value;
}

logSet(a, "age", 36);
