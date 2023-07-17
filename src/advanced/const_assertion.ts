/**
 * They allow developers to declare that a specific expression should be treated as a literal type rather than
 * being widened to a broader type. In TypeScript, there is a concept called "type widening," where the type of a
 *  variable or expression is automatically widened to a broader type based on its usage. This behavior is intended to promote flexibility and compatibility within the language.
 * However, there are cases where developers want to enforce a more specific type without widening. That's where
 * const assertions come into play. By using the as const syntax at the end of an expression, developers indicate
 * that the expression's type should be treated as a literal type.
 */

const x = "hello"; //type of x is widened to a string
console.log(typeof x);
const y = "world" as const; // type of y is "hello" (literal type)
console.log(typeof y);

// Const assertion with object properties:
const obj = {
  name: "John",
  age: 30,
} as const;

// The type of obj is:
// {
//   readonly name: "John";
//   readonly age: 30;
// }

/**
 * In the above example, x has the type string because it goes through type widening.
 * On the other hand, y has the type "hello" because of the const assertion as const.
 * Const assertions are useful when you want to create immutable values or when you want to preserve
 * specific literal types throughout your code. They provide stronger type guarantees and can help catch potential
 * bugs or unintended type widening.
 */
