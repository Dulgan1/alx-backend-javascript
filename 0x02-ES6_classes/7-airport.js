export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string' && typeof code === 'string') {
      this._name = name;
      this._code = code;
    } else {
      throw new TypeError('Name and Code must be string');
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
