const Logger = require("./logger");
const Errors = require("./errors");
const fs = require("fs");

class Configuration {
  static getEnv() {
    return process.env["NODE_ENV"]
  }

  static getDBName() {
    if (process.env["NODE_ENV"] == "development") return "onlineStorageTest";
    else return "onlineStorage";
  }

  static getMountRoot() {
    if (process.env["NODE_ENV"] == "development") {
      if (process.platform === 'win32')
        return "D:\\projects\\online-storage\\mounts"

      return "/disk/projects/online-storage/mounts"
    } else {
      if (process.platform === 'win32')
        return "D:\\mounts"

      return "/disk/mounts"
    }
  }

  static getErrors() {
    return Errors;
  }

  static getLogger() {
    return Logger.getInstance();
  }
}

module.exports = Configuration;
