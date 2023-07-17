type Person_2 = {
  displayName: string;
  email: string;
};

type PersonDictionary = {
  [username: string]: Person_2;
};

const persons: PersonDictionary = {
  jane: {
    displayName: "Jane Doe",
    email: "jane@example.com",
  },
};

persons["john"] = {
  displayName: "John Doe",
  email: "john@example.com",
};
