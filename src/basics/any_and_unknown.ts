let exampleAny: any
let exampleUnknown: unknown

//any
exampleAny = 123
exampleAny = "Hello World"

//unknown
exampleUnknown = 123
exampleUnknown = "Hi TS"

//any
exampleAny.allows.anything.you.can.imagine()
let anysetBool: boolean = exampleAny

//unknown
exampleUnknown.trim()
let unknownSetBoolean: boolean = exampleUnknown //Error: Type 'unknown' is not assignable to type 'boolean'

if (typeof exampleUnknown == "string") {
  exampleUnknown.trim()
}

if (typeof exampleUnknown === "boolean") {
}
