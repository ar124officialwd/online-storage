const fsPromises = require('fs').promises
const path = require('path')

async function copyDirectoryRecursive(from, to) {
  const dirents = await fsPromises.readdir(from);

  for (const d of dirents) {
    const _path = path.join(from, d);
    const stat = await fsPromises.stat(_path)
    if (stat.isDirectory()) {
      await fsPromises.mkdir(path.join(to, d))
      await copyDirectoryRecursive(_path, to)
    } else if (stat.isFile()) {
      await fsPromises.copyFile(_path, path.join(to, d))
    }
  }
}

module.exports = copyDirectoryRecursive