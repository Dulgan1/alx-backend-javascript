const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('#calculateNumber() with type SUM', () => {
  it('should return 4 when adding 1 and 4', () => {
    assert.equal(calculateNumber(1, 4), 5);
  });
  it('should return 5 when adding 1 and 3.8', () => {
    assert.equal(calculateNumber(1, 3.8), 5);
  });
  it('should return 5 when adding 1.3 and 3.9', () => {
    assert.equal(calculateNumber(1.3, 3.9), 5);
  });
  it('should return 6 when adding 1.5 and 3.6', () => {
    assert.equal(calculateNumber(1.5, 3.6), 6);
  });
  it('should return 0 when adding 0.1 and 0.3', () => {
    assert.equal(calculateNumber(0.1, 0.3), 0);
  });
  it('should return 0 when adding -0.9 and 0.9', () => {
    assert.equal(calculateNumber(-0.9, 0.9), 0);
  });
  it('should return -2 when adding -0.9 and -0.8', () => {
    assert.equal(calculateNumber(-0.9, -0.8), -2);
  });
});
