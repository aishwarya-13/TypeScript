/**
 * Instance types
 */

let regex: RegExp = new RegExp("ab+c");
let arr: Array<number> = [1, 2, 3];
let set: Set<number> = new Set([1, 2, 3]);

/**
 * Class
 */

class QueueEx<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: QueueEx<number> = new QueueEx();
