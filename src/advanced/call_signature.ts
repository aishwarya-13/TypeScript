//Below call sign is how normally a function type is defined
//type Add_1 = (a: number, b: number) => number;

/**
 * Below call sign is same as this -> "type Add_1 = (a: number, b: number) => number"
 * Other way of defining a call sign is as below in a body block and replace => with :
 * You can also add other properties and also a function overload
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

/**
 * Class
 */

//type PointCreator = new (x: number, y: number)=> {x: number; y: number};

type PointCreator = {
  new (x: number, y: number): {x: number; y: number};
};

// type PointCreator = {
//   new (x: number, y: number): {x: number; y: number};
//   new (x: number, y: number, z: number): {x: number; y: number; z: number};//constructor overload
//   (x: number, y: number): {x: number; y: number};
//   (x: number, y: number, z: number): {x: number; y: number; z: number};//function overload
//   debugName?: string;
// };

const Point: PointCreator = class {
  constructor(public x: number, public y: number) {}
};
