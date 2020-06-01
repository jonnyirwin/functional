const map = fn => f => f.map(fn);
const chain = fn => f.chain(fn);
const unsafePerformIO = io => io.unsafePerformIO();

exports = {
	map,
	chain,
	unsafePerformIO
};