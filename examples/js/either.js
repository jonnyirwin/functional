import { Either } from '../../monads/either.js';
import { IO } from '../../monads/io.js';
import { tap } from '../../combinators/index.js';

const addBob = obj => Object.assign({}, obj, { bob: 'bobbins' })

const write = document => selector => text => 
	document.querySelector(selector)
	.textContent = text;

const validJson = '{ "isValid": true }';

const writeToSutValid = write(document)('#sut-valid');

const writeValueToSutValid = value => IO.of(value)
	.map(x => x.bob)
	.map(writeToSutValid);

Either.tryCatch(() => JSON.parse(validJson))
	.map(addBob)
	.map(tap(x => console.log('valid:', x)))
	.fold(
		console.error,
		x => writeValueToSutValid(x).unsafePerformIO()
	);
	
const invalidJson = '{ isValid: no }';

const writeToSutInvalid = write(document)('#sut-invalid');

const writeValueToSutInvalid = value => IO.of(value)
	.map(x => x.bob)
	.map(writeToSutInvalid);

Either.tryCatch(() => JSON.parse(invalidJson))
	.map(addBob)
	.map(tap(x => console.log('valid:', x)))
	.fold(
		console.error,
		x => writeValueToSutInvalid(x).run()
	);
