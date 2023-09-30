export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof x !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = x;
  }

  get code() {
    return this._code;
  }

  set code(y) {
    if (typeof y !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = y;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
