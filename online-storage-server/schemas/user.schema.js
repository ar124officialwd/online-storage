const mongoose = require('../database/database').getMongoose()
const crypto = require('crypto');
const createStorage = require('../extra/create-storage')
const deleteStorage = require('../extra/delete-storage')

let userSchema = mongoose.Schema({
  firstName: String,
  secondName: String,
  email: String,
  salt: String,
  hash: String,
  storagePath: String,
  pricingPlan: {
    title: String,
    price: Number,
    size: Number,
  }
})

userSchema.methods.readyState = function() {
  return this.firstName && this.secondName && this.email && this.pricingPlan
}

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString()
}

userSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString()
  return this.hash === hash;
}

userSchema.methods.createStorage = async function() {
  this.storagePath = await createStorage(this.email, this.firstName, this.secondName)
}

userSchema.methods.deleteStorage = function() {
  deleteStorage(this.storagePath)
}

module.exports = userSchema;
