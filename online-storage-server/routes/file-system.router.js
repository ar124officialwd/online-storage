const express = require('express')
const fileSystemRouter = express.Router()
const path = require('path')
const multer = require('multer')
const User = require('../models/user.model')
const Logger = require('../configuration/configuration').getLogger()
const httpMessages = require('http').STATUS_CODES
const readDirectory = require('../extra/read-directory')
const decryptAuth = require('../extra/decrypt-auth')
const File = require('../models/file.model')
const getFileType = require('../extra/get-file-type')
const fs = require('fs')

// we first must check request authentication
var authenticateUser = function(req, res, next) {
  if (!(req.get('Authorization'))) {
    res.set('WWW-Authenticate', 'Basic')
    res.status(401).json({
      error: httpMessages['401']
    })
  }

  const auth = decryptAuth(req.get('Authorization'))

  User.findOne({
    email: auth.email
  }, (err, doc) => {
    if (err) {
      Logger.log(err)
      res.status(500).end()
    } else {
      if (doc === null) {
        res.status(403).json({
          error: httpMessages['403']
        })
      } else {
        req.storagePath = doc.storagePath
        next()
      }
    }
  })
}

// authenticate each and every request
fileSystemRouter.all('/fileSystem', authenticateUser)

// requests of getting files and directories
fileSystemRouter.get('/fileSystem', async (req, res, next) => {

  // request is about download a file
  if (req.headers['file-location']) {
    const file = path.join(req.storagePath, req.headers['file-location'])
      res.download(file, (err) => {
        if (err)
          res.status(500).end()
      })
  } else {
    // by default root directory is sent
    let directory = req.storagePath

    // request is about getting specific directory
    if (req.headers['directory-location']) {
      directory = path.join(req.storagePath, req.headers['directory-location'])
    }

    const responce = await readDirectory(directory)

    responce.location = responce.location.replace(req.storagePath,'')
    if (responce.location == '') {
      responce.name = 'root'
      responce.location = '/'
    }

    for (let f of responce.contents.files) {
      f.location = f.location.replace(req.storagePath,'')
    }
    for (let d of responce.contents.directories) {
      d.location = d.location.replace(req.storagePath,'')
    }

    res.json(responce)
  }
})

let upload = multer({
  dest: path.join('../uploads')
})

// Request of creating directories or uploading files
fileSystemRouter.post('/fileSystem', upload.single('file'), async (req, res, next) => {
  let responce = []

  // request is about creating directories
  if (req.get('Create-Directory')) {
    for (let i = 0; i < req.body.locations.length; i++) {
      fs.promises.mkdir(path.join(req.storagePath, req.body.locations[i]))
        .then(() => {
          responce.push(req.body.locations[i])

          if (i === req.body.locations.length - 1) {
            res.json(responce)
          }
        }).catch(err => {
          Logger.log(err)
          res.status(500).end()
        })
    }
  } else {
    // perhaps an unknown request
    if (!req.file) {
      res.status(401).end();
    }

    // request is about uploading files
    try {
      let filename = req.file.originalname
      if (req.body.targetName) {
        await fs.promises.rename(req.file.path,
          path.join(req.storagePath, req.body.location, req.body.targetName +
            path.extname(filename)))
        filename = req.body.targetName + path.extname(filename)
      } else {
        await fs.promises.rename(req.file.path,
          path.join(req.storagePath, req.body.location, filename))
      }

      let file = new File(filename,
        path.join(req.storagePath, req.body.location, filename))

      const stats = await fs.promises.stat(file.location);
      file.size = stats.size;
      file.exists = true;
      file.mediaType = await getFileType(file.location)
      file.location = file.location.replace(req.storagePath, '/');

      res.json(file);
    } catch(err) {
      Logger.log(err)
      res.status(500).end()
    }
  }
})

fileSystemRouter.put('/fileSystem', async (req, res, next) => {
  let from = [], responce = [], to = []

  // prepare location pairs
  for (let i=0; i < req.body.pairs.length; i++) {
    from[i] = req.body.pairs[i].from
    to[i] = req.body.pairs[i].to
  }

  try {

    for (let i=0; i < req.body.pairs.length; i++) {

      // a rename request: rename directories and files
      if (!req.body.keep) {
          await fs.promises.rename(path.join(req.storagePath, from[i].location),
           path.join(req.storagePath, to[i].location))
          responce.push(req.body.pairs[i].to)

      // a copy request: copy files and directories
      } else {
        // target is a directory: copy directory recursively
        if (from[i].mediaType === 'directory') {
          await fs.promises.mkdir(path.join(req.storagePath, to[i].location))
          const dirents = await fs.promises.readdir(
            path.join(req.storagePath, from[i].location))

          for (let d of dirents) {
            await fs.promises.copyFile(path.join(req.storagePath,
              from[i].location, d),
              path.join(req.storagePath, to[i].location))
          }

          responce.push(to[i])

        // target is a file: copy single file
        } else {
          await fs.promises.copyFile(path.join(req.storagePath,
            from[i].location), path.join(req.storagePath, to[i].location))

          responce.push(to[i])
        }
      }

      if (i === req.body.pairs.length - 1)
        res.json(responce)
    }
  } catch(err) {
    Logger.log(err);
    res.status(500).end()
  }
})

fileSystemRouter.delete('/fileSystem', async (req, res, next) => {
  try {

    // first try entry as a Directory
    fs.promises.rmdir(path.join(req.storagePath,
          req.get('Location')))
      .then(() => {
        res.end(req.get('Location'))
      })
      .catch(async (err) => {

        // try copy as file
        if (err.errno === -20) {
          await fs.promises.unlink(path.join(req.storagePath,
            req.get('Location')))
          res.end(req.get('Location'))
        }

        throw err;
      })
  } catch(err) {
    Logger.log(err)
    res.status(500).end()
  }
})

module.exports = fileSystemRouter
