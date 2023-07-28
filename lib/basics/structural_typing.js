"use strict";
let user = { id: "sdjiwuieuw" };
let product = { id: "oeqiei9" };
user = product;
product = user;
let point2d = { x: 0, y: 10 };
let point3d = { x: 1, y: 2, z: 3 };
/**
 * Extra info ok
 * Point2D has x and y that is also in Point3D. So such assignment is ok
 * Point3D has all the info that is required by 2D so this is ok
 */
point2d = point3d;
/** Same behavior for function arguments */
function takesPoint2D(point) {
    /** */
}
takesPoint2D(point3d);
/**
 * This is not ok - z is missing
 * Point2D does not have all the info that Point3D requires - so error
 */
point3d = point2d;
function takesPoint3D(point) {
    /** */
}
takesPoint3D(point2d);
