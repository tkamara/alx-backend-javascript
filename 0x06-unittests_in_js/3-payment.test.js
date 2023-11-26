const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should return the sum', () => {
    const sumUtils = sinon.spy(Utils, 'calculateNumber');
    const ans = sendPaymentRequestToApi(100, 20);

    expect(ans).to.equal(120);
    expect(sumUtils.calledOnce).to.be.true;

    sumUtils.restore();
  });
})
