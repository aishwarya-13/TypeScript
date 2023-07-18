/**
 * It takes a type of generic input stored it in type T and then checks if type T extends to type number
 * and if condition is true return the literal type 'number' or literal type 'other'
 * They are called conditional types because they use the ternary operator
 */

type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

const isNumber = (value: unknown) =>
  typeof value == "number" ? "number" : "other";

const withNumber = isNumber(123);
const withOther = isNumber("hello");

//////
type IsArray<T> = T extends Array<any> ? "array" : "other";

type WithArray = IsArray<string[]>;
type WithNoArray = IsArray<number>;
