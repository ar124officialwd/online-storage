const Logger = require("./logger");
const Errors = require("./errors");
const fs = require("fs");

class Configuration {
  static getEnv() {
    if (process.env["NODE_ENV"] == "development") return "development";
    else return "production";
  }

  static getDBName() {
    if (process.env["NODE_ENV"] == "development") return "onlineStorageTest";
    else return "onlineStorage";
  }

  static getMountRoot() {
    if (process.env["NODE_ENV"] == "development") {
      return "/disk/projects/online-storage/mounts"
    } else {
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
