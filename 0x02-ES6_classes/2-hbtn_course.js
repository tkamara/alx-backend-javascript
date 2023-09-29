export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // implementing getter
  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof (x) !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = x;
  }

  get length() {
    return this._length;
  }

  set length(y) {
    if (typeof (y) !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = y;
  }

  get students() {
    return this._students;
  }

  set students(z) {
    if (z instanceof Array && z.every(student => typeof student === 'string')) {
      this._students = z;
    } else {
      throw new TypeError('students must be array of strings');
    }
  }
}
