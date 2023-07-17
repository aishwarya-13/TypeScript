//type Add_1 = (a: number, b: number) => number;

/**
 * This sign is same as type Add_1 = (a: number, b: number) => number;
 */
// interface Add_1 {
//   (a: number, b: number): number;
// }

type Add_1 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number; //this is function overload (that add function can also be invoked with 3 parameters)
  debugName?: string;
};

const add_1: Add_1 = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0);
};

add_1.debugName = "Addition function";

/////////////////
type PointCreator = {
  new (x: number, y: number): {x: number; y: number};
};

// type PointCreator = {
//   new (x: number, y: number): {x: number; y: number};
//   new (x: number, y: number, z: number): {x: number; y: number; z: number};
//   (x: number, y: number): {x: number; y: number};
//   (x: number, y: number, z: number): {x: number; y: number; z: number};
//   debugName?: string;
// };

const Point: PointCreator = class {
  constructor(public x: number, public y: number) {}
};
