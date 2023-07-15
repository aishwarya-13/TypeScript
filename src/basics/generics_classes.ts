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
const q = new Queue<number>();
q.push(123);
const qs = new Queue<string>();
qs.push("Hello");
