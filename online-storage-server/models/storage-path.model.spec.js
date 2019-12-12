const Storage = require('./storage-path.model')
const Directory = require('./directory.model')

describe("Unit test for Storage Class", function() {
  let de = new Directory('hello', '/disk/hello', '0 byte');

  it("should create an instance of Storage", () => {
    expect((new Storage(de, '2GB')) instanceof Storage)
      .toBe(true, 'Error creating Storage instance');
  });

  it("should throw TypeError while creating Storage", () => {
    expect(() => { return new Storage('/home/user', '2GB') })
      .toThrowError(TypeError, 'root path must be a directory instance!')
  });
});