const fileType = require('file-type')
const readChunk = require('read-chunk')
async function getFileType(location) {
  const buffer = readChunk.sync(location, 0, fileType.minimumBytes)
  return fileType(buffer).mime;
}

module.exports = getFileType;