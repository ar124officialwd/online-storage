const fs = require('fs')
const path = require('path')
const Logger = require('../configuration/configuration').getLogger()
const Directory = require('../models/directory.model')
const File = require('../models/file.model')
const getFileType = require('../extra/get-file-type')

async function readDirectory(dirToRead) {
  let dir

  try {
    const dirToReadStats = await fs.promises.stat(dirToRead)
    
    dir = new Directory(path.basename(dirToRead), dirToRead, 0, true, null, 0, 0)
    dir.size = dirToReadStats.size


    let dirents = await fs.promises.readdir(dirToRead, {
      withFileTypes: true
    })

    for (let d of dirents) {
      const stat = await fs.promises.stat(path.join(dirToRead, d.name))
      dir.size += stat.size;

      if (stat.isFile()) {
        dir.files++
        let file = new File(d.name.replace(path.extname(d.name),''), 
          path.join(dirToRead, d.name),
          stat.size, '', true);
        file.mediaType = await getFileType(file.location)
        file.extension = path.extname(d.name)
        file.location = path.normalize(file.location)
        dir.contents.files.push(file)
      } else if (stat.isDirectory()) {
        const subdir = await readDirectory(path.join(dirToRead, d.name));
        dir.size += subdir.size;
        subdir.location = path.normalize(subdir.location)

        dir.subDirectories++
        dir.contents.directories.push(subdir)
      }
    }
  } catch(err) {
    Logger.log(err)
  }

  return dir
}

module.exports = readDirectory