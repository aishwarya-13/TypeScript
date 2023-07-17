"use strict";
function addFullName(obj) {
    return Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName}${obj.lastName}` });
}
/**
 * Here the passed object must provide members firstName and lastName
 */
const aish = addFullName({
    email: "aish@gmail.com",
    firstName: "Aishwarya",
    lastName: "Vhatkar",
});
const jane = addFullName({ firstName: "Jane" }); //Error Property 'lastName' is missing in type '{ firstName: string; }' but required in type 'Namefields'.
