export * from './pointfree.js';

const compose = (...fns) => x => fns.reduceRight((acc, f) => f(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, f) => f(acc), x);

// arr is the arguments that have been populated so far
// once enough arguments have been passed for the functions length, the function executes
// until enough arguments are passed, a new function will be returned & arguments
// , so far, will be stored in the arr array.
function curry(fn, arr =[]) {
	console.log({fn, arr});
	return function(...args) {
		return (function(a) {
			return a.length === fn.length
				? fn(...a)
				: curry(fn, a);
		})([...arr, ...args]);
	}
}

const flipParameters = fn => a => b => fn(b)(a);

const timer = label => fn => {
	console.time(label);
	fn();
	console.timeEnd(label);
}

export {
	compose,
	pipe,
	curry,
	flipParameters,
	timer
}