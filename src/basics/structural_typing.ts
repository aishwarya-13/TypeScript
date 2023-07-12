/**
 * Typescripts type system is structural. It does not care about the names of the types.
 * It checks for type compatibility
 * That means you can assign user to product and product to user because they have same structure
 */
type User = { id: string };
type Product = { id: string };

let user: User = { id: "sdjiwuieuw" };
let product: Product = { id: "oeqiei9" };

user = product;
product = user;

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2d: Point2D = { x: 0, y: 10 };
let point3d: Point3D = { x: 1, y: 2, z: 3 };

/**Extra info ok
 * Point2D has x and y that is also in Point3D. So such assignment is ok
 * Point3D has all the info that is required by 2D so this is ok
 */
point2d = point3d;

/**Same behavior for function arguments */
function takesPoint2D(point: Point2D) {
  /** */
}
takesPoint2D(point3d);

/**
 * This is not ok - z is missing
 * Point2D does not have all the info that Point3D requires - so error
 */
point3d = point2d;
function takesPoint3D(point: Point3D) {
  /** */
}
takesPoint3D(point2d);
