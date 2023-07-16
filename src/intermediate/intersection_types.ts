type Point2D_1 = {
  x: number;
  y: number;
};

//Point3D_1 is inheriting x and y from Point2D_1
type Point3D_1 = Point2D_1 & {
  z: number;
};

type Person = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};

type ContactDetails = Person & Email & Phone;

function contact(details: ContactDetails) {
  //function contact(details: Person & Email & Phone) {
  console.log(`Dear ${details.name}`);
  console.log(`${details.email}`);
  console.log(`${details.phone}`);
}
