const PricingPlan = require('../models/pricing-plan.model')
let pricingPlans  = []
pricingPlans[0] = new PricingPlan('Free', 0, 10000000000, '1 Year', 'The Free Plan')

module.exports = pricingPlans;
