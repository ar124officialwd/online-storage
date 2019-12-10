const PricingPlan = require('./pricing-plan.model')

describe('Unit test of Pricing Plan', () => {
  let pp = new PricingPlan('Starter', 10, '10 GB', '1 Year', 
    'An offorable plan!');

  it('should validate the instance to be PricingPlan', () => {
    expect(pp instanceof PricingPlan).toBe(true);
  });

  it('should discount and lower price to 8', () => {
    pp.discount(2);
    expect(pp.price).toBe(8);
  });

  it('should throw an error on try to discount amount that is not a number', 
    () => {
    expect(() => { return pp.discount('20') })
      .toThrowError(TypeError, 'amount must be a number!')
  });

  it('should throw an error on try to discount amount that is less than 0', 
    () => {
    expect(() => { return pp.discount(-20) })
      .toThrowError('amount of discount must be greater than 0!')
  });

  it('should throw an error on try to discount amount that is greater than '
      + 'or equal to original price', 
    () => {
    expect(() => { return pp.discount(20) })
      .toThrowError('amount of discount must be less than the ' 
      + 'original price!')
  });

});