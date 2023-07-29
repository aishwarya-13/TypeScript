/**
Typescript provides the ability to declare any variables that are not present within the typescript code base,
for example, for the process variable.
Syntax for type declaration is the same as the syntax for declaring any variable in code base with 2 differences
1. Use 'declare' keyword
2. do not provide any implementation details

Typescript supports creating these declarations within a separate file as well.
These files are called declaration files.
A declaration file is simply a set of declarations and has file extension .d.ts

You can also download the types for a package using @types/node
 */

console.log("Logged in user", process.env.user);

// declare const process: any;
//declare const process: any = "weqeqe"; //error
