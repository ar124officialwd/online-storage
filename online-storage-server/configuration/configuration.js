const Logger = require("./logger");
const Errors = require("./errors");
const fs = require("fs");

class Configuration {
  static getEnv() {
    return process.env["NODE_ENV"]
  }

  static getDBName() {
    if (process.env["NODE_ENV"] == "development") 
      return "onlineStorageTest";
      
    return "onlineStorage";
  }

  static getMountRoot() {
    const promise = new Promise((res, rej) => {
      if (process.env["NODE_ENV"] == "development") {
        if (process.platform === 'win32')
          res("D:\\projects\\online-storage\\mounts")
        else
          res("/disk/projects/online-storage/mounts")
      } else {
        if (process.platform === 'win32')
          res("D:\\mounts")
        else
          res("/disk/mounts")
      }
    })

    promise
      .then(mountRoot => {
        fs.promises.mkdir(mountRoot, {
          recursive: true
        })
          .then(() => {
            return mountRoot
          })
          .catch(err => {
            throw err
          })
      })

    return promise
  }

  static getErrors() {
    return Errors;
  }

  static getLogger() {
    return Logger.getInstance();
  }
}

module.exports = Configuration;
