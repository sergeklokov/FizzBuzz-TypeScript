"use strict";
// Solution: LeetCode 412. Fizz Buzz
// This file contains a straightforward implementation that returns an array
// of strings for the numbers from 1..n with the classic Fizz/Buzz rules.
// - divisible by 3 and 5 -> "FizzBuzz"
// - divisible by 3 -> "Fizz"
// - divisible by 5 -> "Buzz"
// - otherwise -> the number as a string
//
// Complexity: O(n) time, O(n) additional space for the result array.
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generate FizzBuzz values for 1..n (inclusive).
 * @param n upper bound (inclusive)
 * @returns array of strings representing the FizzBuzz sequence
 */
function fizzBuzz(n) {
    const r = [];
    // Iterate from 1 to n and decide each output by divisibility tests.
    for (let i = 1; i <= n; i++) {
        // Check both 3 and 5 first to handle 15 -> "FizzBuzz".
        if (i % 3 === 0 && i % 5 === 0) {
            r.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            // Multiples of 3 only
            r.push("Fizz");
        }
        else if (i % 5 === 0) {
            // Multiples of 5 only
            r.push("Buzz");
        }
        else {
            // No special rule applies -> push numeric string
            r.push(i.toString());
        }
    }
    return r;
}
// CLI helper: read optional first CLI argument as n when running under Node.
// Using globalThis avoids requiring @types/node in this repository.
const arg = (_b = (_a = globalThis.process) === null || _a === void 0 ? void 0 : _a.argv) === null || _b === void 0 ? void 0 : _b[2];
let n = arg ? parseInt(arg, 10) : 15;
if (isNaN(n))
    n = 15;
console.log(fizzBuzz(n));
//# sourceMappingURL=FizzBuzz1.js.map