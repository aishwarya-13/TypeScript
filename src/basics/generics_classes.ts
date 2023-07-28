/**
 * Here Queue will accept the parameters of type T(generic)
 * I can pass a number or string to the class
 */
class Queue<T> {
  data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | null {
    return this.data.shift() ?? null;
  }
}
const q = new Queue<number>(); //if you want a queue of numbers we pass in type number
q.push(123);
const qs = new Queue<string>(); //if you want a queue of strings we pass in type string
qs.push("Hello");
