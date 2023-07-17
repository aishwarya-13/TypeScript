/**
Sometimes you do a perfectly valid type check on a variable, but then when you try to use the variable types,
it complains that it's not the type that you expect it to be.
The most likely cause for that is some form of temporal uncertainty.
 */

/**
 * here we get error at line 19 that says suffix is possibly undefined
 * This happens because whenever you use a callback any of the text that you might have done on variables outside
 * of that callback are essentially discarded because Typescript doesn't know when that callback will execute
 * Solution to such problem is:
 * Once you have done a type check on a particular variable, store the reference to that particular variable
 * in a new one and Typescript will automatically infer it to have that restricted type of type string
 */

function getSuffix() {
  return "Miss";
}

let suffix: string | null = getSuffix();
if (suffix != null) {
  const suffixLocal = suffix;
  let exampleOne: string = "jane" + suffix.toUpperCase();
  ["john", "alfred"].forEach((name) => {
    let exampleTwo: string = name + suffixLocal.toUpperCase();
    //let exampleTwo: string = name + suffix.toUpperCase();
  });
}
