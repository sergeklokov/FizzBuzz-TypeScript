# FizzBuzz-TypeScript

This repository contains TypeScript solutions for the LeetCode problem 412: Fizz Buzz.

Problem (summary)
- Given an integer n, return a string array answer (1-indexed) where:
  - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
  - answer[i] == "Fizz" if i is divisible by 3.
  - answer[i] == "Buzz" if i is divisible by 5.
  - answer[i] == i (as a string) if none of the above conditions are true.

Examples
- Input: n = 3  -> Output: ["1","2","Fizz"]
- Input: n = 5  -> Output: ["1","2","Fizz","4","Buzz"]
- Input: n = 15 -> Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

Files
- FizzBuzz1.ts - Simple and idiomatic solution using a for loop and modulo checks.
- FizzBuzz5.ts - Port of the provided Python implementation: explicit while-loop
  that appends values in groups matching the 15-step FizzBuzz pattern.

How to build
1. Install TypeScript if you don't have it globally (optional):
   npm install -g typescript

2. Compile the project (tsconfig.json places output in `dist`):
   tsc --project tsconfig.json

How to run
- Node: `node dist/FizzBuzz1.js 15` or `node dist/FizzBuzz5.js 15`
  If no argument is provided the default n=15 is used.

Notes
- The TypeScript files are written as modules (each file starts with `export {}`)
  so they do not leak declarations into the global scope. CLI access to
  `process.argv` is done through `globalThis` to avoid adding `@types/node`
  as a development dependency.

Complexity
- Time: O(n) for both implementations.
- Space: O(n) additional space for the returned array.

License
- MIT-style: feel free to reuse and adapt the code.
