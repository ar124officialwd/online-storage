const fileType = require('file-type')
const readChunk = require('read-chunk')
async function getFileType(location) {
  const buffer = readChunk.sync(location, 0, fileType.minimumBytes)
  const fileTypeObject = fileType(buffer)
  if (fileTypeObject) {
    return fileTypeObject.mime
  }
  return 'file/unknown'
}

module.exports = getFileType;