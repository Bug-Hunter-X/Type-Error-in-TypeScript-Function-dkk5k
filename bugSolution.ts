function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20); // Correct usage
console.log(result); // Output: 30

//Alternative Solution: Handling string concatenation
function addStrings(a: string, b: string): string {
  return a + b; // String concatenation
}

let stringResult = addStrings("hello", "world");
console.log(stringResult); //Output: helloworld