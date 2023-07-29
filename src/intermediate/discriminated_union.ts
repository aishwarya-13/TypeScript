type Square_ = {
  kind: "square";
  size: number;
};

type Rectangle_ = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape_ = Square_ | Rectangle_;

function area(shape: Shape_) {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  }
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
}
