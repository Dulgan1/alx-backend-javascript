const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
  const consoleSpy = sinon.spy(console, 'log');

  it('validate the usage of the Utils function', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calcStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcNumStub.alwaysReturned(10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    consoleSpy.restore();
    calcStub.restore();
  });
});
