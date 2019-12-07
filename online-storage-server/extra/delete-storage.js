const mountRoot = require('../configuration/configuration').getMountRoot()
const path = require('path')
const fs = require('fs')

module.exports = (storagePath) => {
  if (!storagePath || storagePath == '')
    return
  fs.rmdirSync(storagePath)
}
