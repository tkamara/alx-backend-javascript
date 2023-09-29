import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(x) {
    if (typeof (x) !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = x;
  }

  get currency() {
    return this._currency;
  }

  set currency(y) {
    if (y instanceof Currency) {
      this._currency = y;
    } else {
      throw new TypeError('currency must be a currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof (conversionRate) !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
