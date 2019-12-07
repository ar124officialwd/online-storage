const FileSystemEntry = require('./file-system-entry.model')

class DirectoryContents {
  constructor(files, directories) {
    this.files = files
    this.directories = directories
  }
}

class Directory extends FileSystemEntry {
  constructor(name, location, size, exists = false, parent = null, subDirectories = 0,
    files = 0, contents = null) {
      super(name, location, size, exists)
      this.mediaType = 'directory'
      this.parent = parent
      this.subDirectories = subDirectories
      this.files = files
      this.contents = contents || new DirectoryContents([], [])
  }
}

module.exports = Directory;
