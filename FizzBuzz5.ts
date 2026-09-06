// Alternative implementation: explicit while-loop that appends values in
// groups reflecting the 15-step FizzBuzz pattern. This mirrors the Python
// source you provided and demonstrates a different control flow than the
// simple modulo-based loop in FizzBuzz1.ts.
//
// This file is intentionally verbose in the loop to show the repeated
// sequence and to illustrate an approach that appends multiple values per
// loop iteration. Complexity remains O(n) time and O(n) space.

export {}

/**
 * Generate FizzBuzz values using an explicit while-loop and stepwise appends.
 * This follows the Python 'fizz_buzz_to_fifteen' approach but written in TS.
 */
function fizzBuzzToFifteen(n: number): string[] {
	const result: string[] = [];

	let i = 1;
	while (i <= n) {
		// Append values for positions 1..15 in sequence, breaking early if
		// the requested upper bound is reached.
		result.push(i.toString()); // 1
		i += 1;
		if (i > n) break;

		result.push(i.toString()); // 2
		i += 1;
		if (i > n) break;

		result.push("Fizz"); // 3
		i += 1;
		if (i > n) break;

		result.push(i.toString()); // 4
		i += 1;
		if (i > n) break;

		result.push("Buzz"); // 5
		i += 1;
		if (i > n) break;

		result.push("Fizz"); // 6
		i += 1;
		if (i > n) break;

		result.push(i.toString()); // 7
		i += 1;
		if (i > n) break;

		result.push(i.toString()); // 8
		i += 1;
		if (i > n) break;

		result.push("Fizz"); // 9
		i += 1;
		if (i > n) break;

		result.push("Buzz"); // 10
		i += 1;
		if (i > n) break;

		result.push(i.toString()); // 11
		i += 1;
		if (i > n) break;

		result.push("Fizz"); // 12
		i += 1;
		if (i > n) break;

		result.push(i.toString()); // 13
		i += 1;
		if (i > n) break;

		result.push(i.toString()); // 14
		i += 1;
		if (i > n) break;

		result.push("FizzBuzz"); // 15
		i += 1;
	}

	return result;
}

// CLI helper: read optional first CLI argument as n when running under Node.
// Use globalThis to avoid adding node type definitions to the project.
const arg = (globalThis as any).process?.argv?.[2];
let n = arg ? parseInt(arg, 10) : 15;
if (isNaN(n)) n = 15;

console.log(fizzBuzzToFifteen(n));
