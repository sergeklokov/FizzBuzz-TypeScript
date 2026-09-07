// Alternative implementation: use the repeating 15-position FizzBuzz cycle
// as a lookup table instead of checking divisibility for every number.

export {}

const cycle: string[] = [
	"1", "2", "Fizz", "4", "Buzz",
	"Fizz", "7", "8", "Fizz", "Buzz",
	"11", "Fizz", "13", "14", "FizzBuzz",
]

/**
 * Generate FizzBuzz values for 1..n (inclusive).
 * @param n upper bound (inclusive)
 * @returns array of strings representing the FizzBuzz sequence
 */
function fizzBuzz(n: number): string[] {
	const result: string[] = [];

	for (let i = 1; i <= n; i++) {
		const cycleValue = cycle[(i - 1) % cycle.length];
		result.push(cycleValue === undefined ? i.toString() : cycleValue);
	}

	return result;
}

// CLI helper: read optional first CLI argument as n when running under Node.
const arg = (globalThis as any).process?.argv?.[2];
let n = arg ? parseInt(arg, 10) : 15;
if (isNaN(n)) n = 15;

console.log(fizzBuzz(n));
