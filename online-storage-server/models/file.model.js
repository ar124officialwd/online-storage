const FileSystemEntry = require('./file-system-entry.model')
const getFileType = require('../extra/get-file-type')

class File extends FileSystemEntry {
  constructor(name, location, size, mediaType = null, extension, 
    exists = false) {
    super(name, location, size, mediaType, exists)
    this.extension = extension;
  }
}

module.exports = File;