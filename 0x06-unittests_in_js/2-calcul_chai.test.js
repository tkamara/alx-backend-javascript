const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return rounded sum', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1.6, 3)).to.equal(5);
    expect(calculateNumber('SUM', 2, 4.1)).to.equal(6);
    expect(calculateNumber('SUM', 2.3, 4.8)).to.equal(7);
  });

  it('should handle negative numbers in sum', () => {
    expect(calculateNumber('SUM', 1, -3)).to.equal(-2);
    expect(calculateNumber('SUM', -1.6, 3)).to.equal(1);
    expect(calculateNumber('SUM', -2, 4.1)).to.equal(2);
    expect(calculateNumber('SUM', 2.3, -4.8)).to.equal(-3);
  });

  it('should handle non-numbers in sum', () => {
    expect(() => {
      calculateNumber('SUM', NaN, 2).to.throw(TypeError);
      });
  });

  it('should return rounded difference', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.6, 3)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 2, 4.1)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 4.8, 2.3)).to.equal(3);
  });

  it('should handle negative numbers in subtraction', () => {
    expect(calculateNumber('SUBTRACT', 1, -3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', -1.6, 3)).to.equal(-5);
    expect(calculateNumber('SUBTRACT', -2, 4.1)).to.equal(-6);
    expect(calculateNumber('SUBTRACT', 2.3, -4.8)).to.equal(7);
  });

  it('should handle non-numbers in subraction', () => {
    expect(() => {
      calculateNumber('SUBTRACT', NaN, 2).to.throw(TypeError);
      });
  });

  it('should return rounded division', () => {
    expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
    expect(calculateNumber('DIVIDE', 6, 1.6)).to.equal(3);
    expect(calculateNumber('DIVIDE', 10, 4.9)).to.equal(2);
    expect(calculateNumber('DIVIDE', 20, 4.8)).to.equal(4);
  });

  it('should handle negative numbers in division', () => {
    expect(calculateNumber('DIVIDE', -3, 1)).to.equal(-3);
    expect(calculateNumber('DIVIDE', -6, -1.6)).to.equal(3);
    expect(calculateNumber('DIVIDE', -10, 4.9)).to.equal(-2);
    expect(calculateNumber('DIVIDE', 20, -4.8)).to.equal(-4);
    expect(calculateNumber('DIVIDE', 3.2, 0)).to.equal('Error');
  });

  it('should handle non-numbers in division', () => {
    expect(() => {
      calculateNumber('DIVIDE', NaN, 2).to.throw(TypeError);
      });
  });
})
