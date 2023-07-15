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
const q = new Queue();
q.push(123);
const qs = new Queue();
qs.push("Hello");
