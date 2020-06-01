import { curry } from '../../utils/index.js';

function add(a, b, c, d) {
	console.log({a, b, c, d});
	return a + b + c + d;
}

const curriedAdd = curry(add);

const partially = curriedAdd(1,2);
const nearly = partially(3);
console.log({nearly});

