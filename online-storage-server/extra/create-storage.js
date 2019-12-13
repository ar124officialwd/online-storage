const getMountRoot = require('../configuration/configuration').getMountRoot
const path = require('path')
const fs = require('fs')
const Logger = require('../configuration/configuration').getLogger()

async function createStorage(email, firstName, secondName) {
  email = String(email).toLowerCase().replace(/[@_\.\-]/g, '')
  firstName = String(firstName).toLowerCase().replace(/[@_\.\-]/g, '')
  secondName = String(secondName).toLowerCase().replace(/[@_\.\-]/g, '')
  let storage

  try {
    const mountRoot = await getMountRoot() 
    let storagePath = path.join(mountRoot, `${secondName}${email}${firstName}`)
    storage = fs.promises.mkdir(storagePath, { recursive: true })
      .then(() => {
        return storagePath
      })
  } catch(err) {
    Logger.log(err)
    throw err
  }

  return storage
}

module.exports = createStorage
