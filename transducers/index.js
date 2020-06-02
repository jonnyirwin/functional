import {compose} from '../utils/index.js';

const isPlainObject = (item) => 
	(typeof item === "object" && !Array.isArray(item) && item !== null);

const filter = (predicate) => (reducer) =>
	(acc, curr) => predicate(curr) ? reducer(acc, curr) : acc;

const pushReducer = (acc, curr) => [...acc, curr];
const objectReducer = (acc, curr) => ({
	...acc,
	...curr
});
	
const into = (to, xf, collection) => {
	if(Array.isArray(to)) return transduce(xf, pushReducer, to, collection);
	else if (isPlainObject(to)) return transduce(xf, objectReducer, to, collection);
	else if(to['@@transducer/step']) {
		const init = to['@@transducer/init']
			? to['@@transducer/init']
			: to.constructor;
		return transduce(xf, to['@@transducer/step'], init, collection);
	}
	throw new Error('into only supports arrays and objects as `to`');
};

const map = (xf) => (reducer) => (acc, curr) => reducer(acc, xf(curr));

const seq = (xf, collection) => {
	if(Array.isArray(collection)) return transduce(xf, pushReducer, []. collection);
	else if (isPlainObject(collection)) return transduce(xf, objectReducer, {}, collection);
	else if(collection['@@transducer/step']) {
		const init = collection['@@transducer/init']
			? collection['@@transducer/init']
			: collection.constructor;
		return transduce(xf, collection['@@transducer/step'], init, collection);
	}
	throw new Error('unsupported collection type');
};

const take = () => {};

const transduce = (xf, reducer, seed, _collection) => {
	const transformedReducer = xf(reducer);
	let accumulation = seed;

	const collection = isPlainObject(_collection) ? Object.entries(_collection) : _collection;

	for(const value of collection) {
		accumulation = transformedReducer(accumulation, value);
	}
	return accumulation;
};

const isEven = number => number % 2 === 0;
const isEvenFilter = filter(isEven);

const quadruple = number => number * 4;
const quadrupleMap = map(quadruple);

const switcheroo = ([k,v]) => ({[v]: k});

const res = [1,2,3,4,5,6].reduce(isEvenFilter(pushReducer), []);

const res2 = [1,2,3,4,5,6].reduce(quadrupleMap(pushReducer), []);

const res3 = [1,2,3,4,5,6].reduce(isEvenFilter(quadrupleMap(pushReducer)),[]);

const compFunctions = compose (isEvenFilter, quadrupleMap);
const res4 = [1,2,3,4,5,6].reduce(compFunctions(pushReducer),[]);
res
const res5 = transduce(
	compFunctions,
	pushReducer,
	[],
	[1,2,3,4,5,6]
);

into([], compFunctions, [1,2,3,4,5,6])

into({}, map(switcheroo), {one:1, two:2}) //?

export { filter, into, map, seq, take, transduce };

