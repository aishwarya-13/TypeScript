type Padding = string | number;

function foo(input: string | string[]) {
  let line = "";
  if (typeof input === "string") {
    line = input.trim();
  } else {
    line = input.map((x) => x.trim()).join();
  }
}

foo("hello");
foo("hi", "hola", "hello", "namaskar");
