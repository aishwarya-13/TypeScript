type Point1 = {
  readonly x: number;
  y: number;
};

let point: Point1 = {
  x: 0,
  y: 0,
};

//Variable assignment
point = {x: 1, y: 1};

//property assignment
point.x = 2; //Cannot assign to 'x' because it is a read-only property.
point.y = 3;
