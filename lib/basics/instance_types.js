"use strict";
/**
 * Instance types
 */
let regex = new RegExp("ab+c");
let arr = [1, 2, 3];
let set = new Set([1, 2, 3]);
/**
 * Class
 */
class QueueEx {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue = new QueueEx();
