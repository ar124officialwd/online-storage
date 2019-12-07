const Logger = require('../configuration/configuration').getLogger()
const mmm = require('mmmagic')
const Magic = mmm.Magic

function getFileTypePromise(location) {
  return new Promise((resolve, reject) => {
    var magic = new Magic(mmm.MAGIC_MIME_TYPE);
    magic.detectFile(location, (err, result) => {
      if (err)
        reject(err)
      resolve(result)
    })
  })
}

async function getFileType(location) {
  try {
    return await getFileTypePromise(location)
  } catch(err) {
    Logger.log(err)
  }
}

module.exports = getFileType;