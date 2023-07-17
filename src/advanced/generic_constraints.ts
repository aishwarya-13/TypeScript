/**
 * In order to access firstName and lastName from obj object we have to conform to a particular structure that
 * is done by using a generic constraint
 * Here we say that type T must have all fields containing in type Namefields
 * By doing so we make sure that type T has members firstName and lastName
 */
type Namefields = {firstName: string; lastName: string};

function addFullName<T extends Namefields>(obj: T): T & {fullName: string} {
  return {
    ...obj,
    fullName: `${obj.firstName}${obj.lastName}`,
  };
}

/**
 * Here the passed object must provide members firstName and lastName
 */
const aish = addFullName({
  email: "aish@gmail.com",
  firstName: "Aishwarya",
  lastName: "Vhatkar",
});

const jane = addFullName({firstName: "Jane"}); //Error Property 'lastName' is missing in type '{ firstName: string; }' but required in type 'Namefields'.
