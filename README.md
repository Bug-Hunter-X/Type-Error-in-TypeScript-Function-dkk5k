# Type Error in TypeScript Function
This example demonstrates a type error that commonly occurs in TypeScript functions when the types of the arguments passed do not match the types defined in the function signature.

## Bug
The function `add` is defined to accept two numbers as input and return their sum. However, in the usage of the function, two strings are passed as arguments. This results in a type error since the types are incompatible.

## Solution
To fix this issue, you need to ensure that the arguments passed to the function match the function's signature.  Either change the inputs to numbers or modify the function's type definition to accept strings.