class FileSystemEntry {
  constructor(name, location, size, exists = false) {
    this.name = name;
    this.location = location;
    this.size = size;
    this.exists = exists;
  }
}

module.exports = FileSystemEntry;
