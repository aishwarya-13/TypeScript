type Point2D_2 = {x: number; y: number};
type Point3D_2 = {x: number; y: number; z: number};
type Person_3 = {name: string; email: string};

let point2d_2: Point2D_2 = {x: 0, y: 0};
let point3d_2: Point3D_2 = {x: 0, y: 0, z: 0};
let person_2 = {name: "Aishwarya", email: "aish@gmail.com"};

point2d_2 = point3d_2; //can assign because point3d_2 has all properties that point2d_2 requires
point3d_2 = point2d_2; //error - Property 'z' is missing in type 'Point2D_2' but required in type 'Point3D_2'
point3d_2 = point2d_2 as Point3D_2; //forceful assertion

person_2 = point3d_2; //error
point3d_2 = person_2;
point3d_2 = person_2 as Point3D_2; //Error
//Double assertion
point3d_2 = person_2 as unknown as Point3D_2; //Double assertion
