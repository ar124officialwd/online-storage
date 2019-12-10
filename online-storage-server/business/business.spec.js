const Business = require('./business')

describe('Unit testing of Busines Interface', () => {
  it('should return business plans', () => {
    expect(Business.getPricingPlans()).toBeTruthy('Error getting Business Plans');
  })
})