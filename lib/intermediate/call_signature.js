"use strict";
//type Add_1 = (a: number, b: number) => number;
const add_1 = (a, b, c) => {
    return a + b + (c != null ? c : 0);
};
add_1.debugName = "Addition function";
// type PointCreator = {
//   new (x: number, y: number): {x: number; y: number};
//   new (x: number, y: number, z: number): {x: number; y: number; z: number};
//   (x: number, y: number): {x: number; y: number};
//   (x: number, y: number, z: number): {x: number; y: number; z: number};
//   debugName?: string;
// };
const Point = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
