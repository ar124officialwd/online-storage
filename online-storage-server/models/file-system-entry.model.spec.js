const FileSystemEntry = require('./file-system-entry.model')

describe("It should create FileSystemEntry instance", function() {
  let fse = new FileSystemEntry('hello', '/disk/hello', '0 byte');

  it("should create an instance of FileSystemEntry", () => {
    expect(fse instanceof FileSystemEntry).toBe(true, 'Error creating FileSystemEntry instance');
  })
});