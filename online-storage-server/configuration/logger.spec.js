const Logger = require('./logger')

describe('Unit test of Logger', () => {
  let instance1 = Logger.getInstance('a');
  let instance2 = Logger.getInstance('b');
  let instance3 = Logger.getInstance('c');

  it('should verify instances of Logger', () => {
    expect(instance1).toBeTruthy('Error creating first instance of Logger');
    expect(instance2).toBeTruthy('Error creating first instance of Logger');
    expect(instance3).toBeTruthy('Error creating first instance of Logger');
  });
  
  it('should verify that all instances are same', () => {
    expect(instance1 === Logger.instance).toBe(true,
       'All instances of Logger may not be equal');

    expect(instance2 === Logger.instance).toBe(true,
       'All instances of Logger may not be equal');

    expect(instance3 === Logger.instance).toBe(true,
       'All instances of Logger may not be equal');
  });

});