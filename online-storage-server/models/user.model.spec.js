const User = require('./user.model')

describe("Test User model of MongoDB", () => {

  it("should should validate User model to be a function", () => {
    expect(typeof User).toBe('function', 'Error, User Model is not a function!');
  });

  it("should should validate User model modelName property to be 'User'", () => {
    expect(User.modelName).toBe('User', 'Error, User Model\'s name is invalid!');
  });

});