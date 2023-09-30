export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string' && typeof motor === 'string' && typeof color === 'string') {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    } else {
      throw new TypeError('All attribute must be string');
    }
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return this;
  }
}
