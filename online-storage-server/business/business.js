const pricingPlans = require('./pricing-plans')

class Business {
  static getPricingPlans() {
    return pricingPlans;
  }
}

module.exports = Business;