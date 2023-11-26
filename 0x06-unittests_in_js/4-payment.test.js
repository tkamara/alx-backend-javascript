const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('spyandstub', () => {
  it('should return the sum', () => {
    const sumUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy  = sinon.spy(console, 'log');
    const ans = Utils.calculateNumber('SUM', 100, 20);
    sendPaymentRequestToApi(100, 20);
    sumUtils.withArgs('SUM', 100, 20).returns(10);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    sumUtils.restore();
    consoleSpy.restore();
  });
})
