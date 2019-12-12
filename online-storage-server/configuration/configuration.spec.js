const Configuration = require('./configuration');
const Logger = require('./logger');

describe('Unit testing of Configuration', () => {
  
  it('should return Logger instance', () => {
    expect(Configuration.getLogger()).toBeInstanceOf(Logger)
  })

  it('should return database name', () => {
    expect(Configuration.getDBName()).toBeTruthy('Error: No database name returned!')
  })

  it('should return mount path', async () => {
    await expectAsync(Configuration.getMountRoot()).toBeResolved()
  })
});
