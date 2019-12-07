const mongoose = require('../database/database').getMongoose()
const userSchema = require('../schemas/user.schema')

module.exports = mongoose.model('User', userSchema, 'User')
