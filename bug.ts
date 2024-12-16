function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world"); // Type error will occur here
console.log(result); // This will not be reached