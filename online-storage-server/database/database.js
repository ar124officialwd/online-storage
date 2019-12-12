const mongoose = require('mongoose');
const Configuration = require('../configuration/configuration')
const Logger = Configuration.getLogger();

class Database {

    static getMongoose() {
      let database = Configuration.getDBName()
      mongoose.connect(`mongodb://localhost:27017/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      mongoose.connection.on('error', (err) => {
        Logger.log(err);
      });

      return mongoose;
    }
}

module.exports = Database;
