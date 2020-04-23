import { Maybe } from '../monads/index.js';

const toUpper = str => str.toUpperCase();
const removeVowels = str => str.replace(/[aeiou]/ig, '');

// 1. when a value is present

let name = 'bob bobbins';

let result = Maybe
	.fromNullable(name)
	.map(toUpper)
	.map(removeVowels)
	.toString();

console.log({result});
// { result: 'Maybe.Just(BB BBBNS)' }

// 2. When no value is present

name = null;

result = Maybe
	.fromNullable(name)
	.map(toUpper)
	.map(removeVowels)
	.toString();

	console.log({result});
// { result: 'Maybe.Nothing' }