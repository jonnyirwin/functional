function Maybe(value) {
	return Just(value);
}

Maybe.of = Just;

Maybe.fromNullable = function fromNullable(value) {
	return  value != null ? Just(value) : Nothing();
}

Maybe.tryCatch = fn => {
	try {
		return Just(fn());
	} catch  (err) {
		return Nothing();
	}
}

function Just(value) {
	return {
		isNothing: () => false,
		isJust: () => true,
		map: fn => Just(fn(value)),
		fold: () => value,
		chain: fn => fn(value),
		toString: () => `Just(${value})`
	};
}

function Nothing() {
	return {
		isNothing: () => true,
		isJust: () => false,
		map: () => Nothing(),
		fold: () => Nothing(),
		chain: fn => Nothing(),
		toString: () => 'Nothing'
	};
}

export { Maybe, Just, Nothing };