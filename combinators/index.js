let identity, I;
identity = I = a => a;

let tap, K;
tap = K = fn => a => {
	fn(a);
	return a;
};

let alternation, OR;
alternation = OR = (fnX, fnY) => val => fnX(val) || fnY(val);

let sequence, S;
sequence = S = (...xs) => val => xs.forEach(x => x(val));

let fork;
fork = (join, fnX, fnY) => val => join(fnX(val), fnY(val));

export {
	identity,
	I,
	tap,
	K,
	alternation,
	OR,
	sequence,
	S,
	fork
}
