const FileSystemEntry = require('./file-system-entry.model')
const File = require('./file.model')

describe("It should create File instance", function() {
  let fe = new File('hello', '/disk/hello', '0 byte', 'image/png', 'png');

  it("should create an instance of File", () => {
    expect(fe instanceof FileSystemEntry && fe instanceof File)
      .toBe(true, 'Error creating File instance');
  })
});