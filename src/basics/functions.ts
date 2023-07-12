function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}

sum(1, 2);
sum(1, 2, 3);
