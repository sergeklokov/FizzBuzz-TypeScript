"use strict";
// Alternative implementation: use the repeating 15-position FizzBuzz cycle
// as a lookup table instead of checking divisibility for every number.
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const cycle = [
    "1", "2", "Fizz", "4", "Buzz",
    "Fizz", "7", "8", "Fizz", "Buzz",
    "11", "Fizz", "13", "14", "FizzBuzz",
];
/**
 * Generate FizzBuzz values for 1..n (inclusive).
 * @param n upper bound (inclusive)
 * @returns array of strings representing the FizzBuzz sequence
 */
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        const cycleValue = cycle[(i - 1) % cycle.length];
        result.push(cycleValue === undefined ? i.toString() : cycleValue);
    }
    return result;
}
// CLI helper: read optional first CLI argument as n when running under Node.
const arg = (_b = (_a = globalThis.process) === null || _a === void 0 ? void 0 : _a.argv) === null || _b === void 0 ? void 0 : _b[2];
let n = arg ? parseInt(arg, 10) : 15;
if (isNaN(n))
    n = 15;
console.log(fizzBuzz(n));
//# sourceMappingURL=FizzBuzz2.js.map