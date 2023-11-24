const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return rounded sum', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1.6, 3), 5);
    assert.strictEqual(calculateNumber(2, 4.1), 6);
    assert.strictEqual(calculateNumber(2.3, 4.8), 7);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(1, -3), -2);
    assert.strictEqual(calculateNumber(-1.6, 3), 1);
    assert.strictEqual(calculateNumber(-2, 4.1), 2);
    assert.strictEqual(calculateNumber(2.3, -4.8), -3);
  });

  it('should handle non-numbers', () => {
    assert.throws(() => {
      calculateNumber(NaN, 2), TypeError;
      });
  });
})
