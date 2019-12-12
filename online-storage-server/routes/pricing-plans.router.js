const pricingPlansRouter = require('express').Router()
const pricingPlans = require('../business/business').getPricingPlans()

// path to get pricing plans
pricingPlansRouter.get('/pricingplans', (req, res, next) => {
  res.json(pricingPlans)
})

module.exports = pricingPlansRouter
