class PricingPlan {
  constructor(title, price, size, period, description) {
    this.title = title;
    this.price = price; // in USD
    this.size = size;
    this.period = period;
    this.description = description;
  }

  discount(amount) {
    if (typeof amount != 'number') {
      throw TypeError('amount must be a number!')
    }

    if (amount >= this.price) {
      throw new Error('amount of discount must be less than the original price!')
    }

    if (amount <= 0) {
      throw new Error('amount of discount must be greater than 0!')
    }

    this.price -= amount;
  }
}

module.exports = PricingPlan;