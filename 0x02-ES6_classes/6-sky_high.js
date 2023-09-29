import Building from './5-buildong';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number' || typeof floors !== 'number') {
      throw new TypeError('Sqft and Floor must be numbers');
    }
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  set sqft(sqft) {
    super(sqft);
  }

  set floors(floors) {
    this._floors = floors
  }

  static evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
