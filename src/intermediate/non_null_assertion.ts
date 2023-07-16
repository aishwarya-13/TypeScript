type Point_2 = {
  x: number;
  y: number;
};

let point_2: Point_2;

function initialize() {
  point = {
    x: 0,
    y: 0,
  };
}

initialize();
console.log("After initialized", point_2!.x, point_2!.y);
