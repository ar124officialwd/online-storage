const Directory = require('./directory.model')

class StoragePath {
  constructor(root, size) {
    if (!(root instanceof Directory)) {
      throw new TypeError('root path must be a directory instance!')
    }

    this.rootPath = root;
    this.size = size;
  }
}

module.exports = StoragePath;