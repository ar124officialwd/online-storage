const FileSystemEntry = require('./file-system-entry.model')
const Directory = require('./directory.model')

describe("It should create File instance", function() {
  let de = new Directory('hello', '/disk/hello', '2 Mega byte');

  it("should create an instance of Directory", () => {
    expect(de instanceof FileSystemEntry && de instanceof Directory)
      .toBe(true, 'Error creating Directory Instance');
  })
});