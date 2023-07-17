/**
 * To enforce input array is created newly before any mutation we use readonly
 * Using readonly on a array type enforces it to create a copy first and then mutate it
 */
function reverseSorted(input: readonly number[]): number[] {
  return input.slice().sort().reverse();
}

const start = [1, 2, 3, 4, 5];
const result = reverseSorted(start);

type Neat = readonly number[];
type Long = ReadonlyArray<number>;

/**
 * Tuples
 */
type Point_3 = readonly [number, number];

function move(point: Point_3, x: number, y: number): Point_3 {
  return [point[0] + x, point[1] + y];
  // point[0] += x;
  // point[1] += y;
  // return [x, y];
}

const point_3: Point_3 = [0, 0];
const moved = move(point_3, 10, 10);

console.log(moved); //[10,10]
console.log(point_3); //[0,0]
