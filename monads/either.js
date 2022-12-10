function Either(value) {
	return Right(value);
}

Either.of = Right;

Either.fromNullable = x => x != null ? Right(x) : Left(x);

Either.tryCatch = function tryCatch(fn) {
	try {
		return Right(fn());
	} catch  (err) {
		return Left(err);
	}
}

function Left(value) {
	return {
		isLeft: () => true,
		isRight: () => false,
		map: () => Left(value),
		fold: (f, g) => f(value),
		chain: () => Left(value),
		toString: () => `Either.Left(${value})`
	};
}

function Right(value) {
	return {
		isLeft: () => false,
		isRight: () => true,
		map: fn => Right(fn(value)),
		fold: (f, g) => g(value),
		chain: fn => fn(value),
		toString: () => `Either.Right(${value})`
	};
}

export { Either, Left, Right };
