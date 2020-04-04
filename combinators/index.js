const identity, I;
identity = I = a => a;

const tap, K;
tap = K = fn => a => a;

const alternation, OR;
alternation = OR = (fnX, fnY) => val => fnX(val) || fnY(val);

const sequence, S;
sequence = S = (...xs) => val => xs.forEach(x => x(val));

const fork;
fork = (join, fnX, fnY) => val => join(fnX(val), fnY(val));

export {
	identity,
	I,
	alternation,
	OR,
	sequence,
}
	S,
	fork
}
