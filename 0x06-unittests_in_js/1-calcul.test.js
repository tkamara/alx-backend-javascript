const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return rounded sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1.6, 3), 5);
    assert.strictEqual(calculateNumber('SUM', 2, 4.1), 6);
    assert.strictEqual(calculateNumber('SUM', 2.3, 4.8), 7);
  });

  it('should handle negative numbers in sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1, -3), -2);
    assert.strictEqual(calculateNumber('SUM', -1.6, 3), 1);
    assert.strictEqual(calculateNumber('SUM', -2, 4.1), 2);
    assert.strictEqual(calculateNumber('SUM', 2.3, -4.8), -3);
  });

  it('should handle non-numbers in sum', () => {
    assert.throws(() => {
      calculateNumber('SUM', NaN, 2), TypeError;
      });
  });

  it('should return rounded difference', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 3), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 4.1), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.8, 2.3), 3);
  });

  it('should handle negative numbers in subtraction', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -3), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.6, 3), -5);
    assert.strictEqual(calculateNumber('SUBTRACT', -2, 4.1), -6);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.3, -4.8), 7);
  });

  it('should handle non-numbers in subraction', () => {
    assert.throws(() => {
      calculateNumber('SUBTRACT', NaN, 2), TypeError;
      });
  });

  it('should return rounded division', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3, 1), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 6, 1.6), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 10, 4.9), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 20, 4.8), 4);
  });

  it('should handle negative numbers in division', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -3, 1), -3);
    assert.strictEqual(calculateNumber('DIVIDE', -6, -1.6), 3);
    assert.strictEqual(calculateNumber('DIVIDE', -10, 4.9), -2);
    assert.strictEqual(calculateNumber('DIVIDE', 20, -4.8), -4);
    assert.strictEqual(calculateNumber('DIVIDE', 3.2, 0), 'Error');
  });

  it('should handle non-numbers in division', () => {
    assert.throws(() => {
      calculateNumber('DIVIDE', NaN, 2), TypeError;
      });
  });
})
