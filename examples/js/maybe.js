import { Maybe } from '../../monads/maybe.js';

const toUpperCase = text => text.toUpperCase();
const removeSpaces = text => text.replace(/ /g, '');

const nullAttempt = Maybe.fromNullable(null)
	.map(toUpperCase)
	.map(removeSpaces)
	.toString();

console.log({nullAttempt});

const validAttempt = Maybe.fromNullable('a lowercase string with some spaces in it')
	.map(toUpperCase)
	.map(removeSpaces)
	.toString();

console.log({validAttempt});


