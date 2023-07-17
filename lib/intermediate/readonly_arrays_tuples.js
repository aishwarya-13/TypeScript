"use strict";
/**
 * To enforce input array is created newly before any mutation we use readonly
 * Using readonly on a array type enforces it to create a copy first and then mutate it
 */
function reverseSorted(input) {
    return input.slice().sort().reverse();
}
const start = [1, 2, 3, 4, 5];
const result = reverseSorted(start);
function move(point, x, y) {
    return [point[0] + x, point[1] + y];
    // point[0] += x;
    // point[1] += y;
    // return [x, y];
}
const point_3 = [0, 0];
const moved = move(point_3, 10, 10);
console.log(moved); //[10,10]
console.log(point_3); //[0,0]
