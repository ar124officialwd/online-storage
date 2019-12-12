const UserSchema = require('./user.schema')

describe('Unit test User Schema', () => {
  it('should verify that schema is an object', () => {
    expect(typeof UserSchema).toBe('object');
  });
})