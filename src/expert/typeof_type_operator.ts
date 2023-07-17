/**
 * Here we generate a type Point_ from variable center_
 */
const center_ = {
  x: 0,
  y: 0,
  z: 0,
};

type Point_ = typeof center_;

// type Point_ = {
//   x: number;
//   y: number;
//   z: number;
// };

//const unit_: Point_ = {
const unit_: typeof center_ = {
  x: center_.x + 1,
  y: center_.y + 1,
  z: center_.y + 1,
};
