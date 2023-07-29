"use strict";
/**
 * This way it declares the properties and also initializes them
 */
class Person_4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
/**
U see there is duplication between the declaration of the properties and the constructor parameters.
TS allows us to get rid of this duplication using parameter properties.
 */
// class Person_4 {
//   public name: string;
//   public age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
const adam = new Person_4("Adam", 120000);
console.log(adam.name, adam.age);
