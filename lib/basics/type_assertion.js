"use strict";
let hello = load();
/**
 * For unknown types - you may not want to add these run time type checks simply because
 * of performance reasons or I dont want to worry about the types.
 * So use type assertion (you will tell the compiler what the type of variable is)
 **/
// if (typeof hello == "string") {
//   const trimmed = hello.trim();
// }
const trimmed = hello.trim();
//Or another syntax - this angled bracket syntax does not work in tsx files
const trimmmmed = hello.trim(); //angle brackets syntax will not work in tsx file bz it interprets as a tag
