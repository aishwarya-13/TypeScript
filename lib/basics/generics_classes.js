"use strict";
/**
 * Here Queue will accept the parameters of type T(generic)
 * I can pass a number or string to the class
 */
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        var _a;
        return (_a = this.data.shift()) !== null && _a !== void 0 ? _a : null;
    }
}
const q = new Queue(); //if you want a queue of numbers we pass in type number
q.push(123);
const qs = new Queue(); //if you want a queue of strings we pass in type string
qs.push("Hello");
