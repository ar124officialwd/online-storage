const fileType = require('file-type')
const readChunk = require('read-chunk')
const path = require('path')

async function getFileType(location) {
  const buffer = readChunk.sync(location, 0, fileType.minimumBytes)
  const fileTypeObject = fileType(buffer)
  if (fileTypeObject) {
    return fileTypeObject
  }

  return {
    mime: 'file/unknown',
    ext: path.extname(location)
  }
}

module.exports = getFileType;
