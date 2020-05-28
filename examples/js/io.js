import { IO } from '../../monads/io.js';

const read = document => id => () =>
	document.querySelector('#sut')
	.textContent;

const readFromDom = read(document)('#sut');

const write = document => id => text => 
	document.querySelector(id)
	.textContent = text;

const writeToSut = write(document)('#sut');

const toUppercase = text => text.toUpperCase();
const removeVowels = text => text.replace(/[aeiou]/ig, '');

IO.from(readFromDom)
	.map(toUppercase)
	.map(removeVowels)
	.map(writeToSut)
	.run();