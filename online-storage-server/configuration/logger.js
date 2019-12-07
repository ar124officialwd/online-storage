class Logger {
  static getInstance() {
    if (Logger.instance)
      return Logger.instance

    Logger.instance = new Logger()
    return Logger.instance
  }

  log(msg) {
    console.log(msg)
  }
}

module.exports = Logger