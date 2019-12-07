const getMountRoot = require('../configuration/configuration').getMountRoot
const path = require('path')
const fs = require('fs')
const Logger = require('../configuration/configuration').getLogger

module.exports = (email, firstName, secondName) => {
  email = String(email).toLowerCase().replace(/[@_\.\-]/g, '')
  firstName = String(firstName).toLowerCase().replace(/[@_\.\-]/g, '')
  secondName = String(secondName).toLowerCase().replace(/[@_\.\-]/g, '')
  
  let storagePath = path.join(getMountRoot(), `${secondName}${email}${firstName}`)
  return fs.promises.mkdir(storagePath, { recursive: true })
      .then(() => { return storagePath })
      .catch(() => {Logger.log(err); return storagePath})
}