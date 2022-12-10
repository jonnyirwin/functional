const map = fn => f => f.map(fn);
const chain = fn => f.chain(fn);
const unsafePerformIO = io => io.unsafePerformIO();
const trace = label => value => {
	console.log(label, value);
	return value;
}

exports = {
	map,
	chain,
	unsafePerformIO,
	trace
};
