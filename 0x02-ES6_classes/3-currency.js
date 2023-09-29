export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(x) {
    if (typeof (x) !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = x;
  }

  get name() {
    return this._name;
  }

  set name(y) {
    if (typeof (y) !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = y;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
