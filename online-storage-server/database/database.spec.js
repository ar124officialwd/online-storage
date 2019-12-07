const Database = require('./database')

describe('Database Interface Unit Testing', () => {
  it('should return an instance of Mongoose', () => {
    expect(Database.getMongoose()).toBeTruthy('Database did\'t returned a mongoose');
  });
});