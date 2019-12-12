const axios = require('axios').default

describe('Test of /pricingplan route', () => {
  it('should receive an array of pricingPlans', async () => {
    const get = axios.get('http://127.0.0.1:3000/pricingplans')
    await expectAsync(get).toBeResolved()
  })
})