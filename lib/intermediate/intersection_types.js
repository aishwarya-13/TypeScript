"use strict";
function contact(details) {
    //function contact(details: Person & Email & Phone) {
    console.log(`Dear ${details.name}`);
    console.log(`${details.email}`);
    console.log(`${details.phone}`);
}
