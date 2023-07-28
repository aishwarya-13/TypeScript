type Add = (a: number, b: number) => number;

let addMe: Add;
//let addMe: (a: number, b: number) => number;

addMe = function (a: number, b: number): number {
  return a + b;
};

// takes input as string and returns a number
function add(a: number, b: number): number {
  return a + b;
}

// takes input as string and does not return anything so return type is void
function logMe(message: string): void {
  console.log(message);
}

function sum(...values: number[]) {
  return values.reduce((prev, curr) => {
    return prev + curr;
  });
}

sum(1, 2);
sum(1, 2, 3);
