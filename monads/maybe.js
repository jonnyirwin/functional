function Maybe(value) {
	return value !== null && value !== undefined ? new Just(value) : new Nothing();
}

Maybe.fromNullable = function fromNullable(a) {
	return new Maybe(a);
}

Maybe.of = Maybe.fromNullable;

function Just(value) {
	this._value = value;
	this.isNothing = () => false;
	this.isJust = () => true;
	this.map = fn => Maybe.fromNullable(fn(this._value));
	this.join = () => this._value;
	this.chain = fn => this.map(fn).join();
	this.toString = () => `Maybe.Just(${this._value})`;
}

function Nothing() {
	this.isNothing = () => true;
	this.isJust = () => false;
	this.map = () => this;
	this.join = () => this;
	this.chain = fn => this.map(fn).join();
	this.toString = () => 'Maybe.Nothing';
}

export { Maybe };