function IO(fn) {
	return {
		map: m => new IO(() => m(fn())),
		chain: c => c(fn()),
		run: fn
	};
}

IO.of = function of(value) {
	return new IO(() => value);
}

IO.from = function from(fn) {
	return new IO(fn);
}

export { IO };