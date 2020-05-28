import { Either } from '../../monads/either.js';
import { tap } from '../../combinators/index.js';

const validJson = '{ "isValid": true }';

const addBob = obj => Object.assign({}, obj, { bob: 'bobbins' })

Either.tryCatch(() => JSON.parse(validJson))
	.map(addBob)
	.map(tap(console.log))
	.fold(console.error, x => alert(x.bob));


const invalidJson = '{ isValid: no }';

Either.tryCatch(() => JSON.parse(invalidJson))
	.map(addBob)
	.fold(x => console.log("No bob here"), x => alert(x.bob));
