const User = require('../models/user.model.js')
const express = require('express');
const userRouter = express.Router();
const Errors = require('../configuration/configuration').getErrors()
const Logger = require('../configuration/configuration').getLogger()
const httpMessages = require('http').STATUS_CODES
const decryptAuth = require('../extra/decrypt-auth')

// path to get user information
userRouter.get('/user', (req, res, next) => {
  // basic authencation must be sent
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
        // perhaps client want to authenticate user
        if (auth.password != '') {
          if (doc.validatePassword(auth.password)) {
            res.json({
              firstName: doc.firstName,
              secondName: doc.secondName,
              email: doc.email,
              pricingPlan: doc.pricingPlan
            })
          } else {
            res.status(403).json({
              error: httpMessages['403']
            })
          }

        // perhapse client want to check user existance
        } else {
          res.json({
            email: auth.email
          })
        }
      }
    }
  })
})

// path to create a new user
userRouter.post('/user', async (req, res, next) => {
  let error = req.get('content-type') !== 'application/json'
  error = error && req.get('content-type') !== 'application/json;charset=utf-8'
  const user = new User({
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    email: req.body.email,
    pricingPlan: {
      title: req.body.pricingPlan.title,
      price: req.body.pricingPlan.price,
      size: req.body.pricingPlan.size,
    }
  })
  error = error || (!(user.readyState()))
  error = error || (!(req.body.password))

  // error of request format
  if (error) {
    res.status(400).end()

  // procceed processing user save request
  } else {
    User.findOne({
      email: req.body.email
    }, async (err, obj) => {
      if (err) {
        Logger.log(err)
        res.status(500).end()
      } else {
        if (obj) {
          res.json({
            error: Errors.userExists
          })
        } else {
          await user.createStorage()
          user.setPassword(req.body.password)
          user.save((err, user) => {
            if (err) {
              Logger.log(err)
              res.status(500).end()
            } else {
              res.json(req.body)
            }
          })
        }
      }
    })
  }
})

// path to update user information
userRouter.patch('/user', (req, res, next) => {
  let error = req.get('Content-Type') !== 'application/json'
  error = error && req.get('content-type') !== 'application/json;charset=utf-8'

  if (!(req.get('Authorization'))) {
    res.set('WWW-Authenticate', 'Basic')
    res.status(401).json({
      error: httpMessages['401']
    })
  }

  if (error) {
    res.status(400).end()
  } else {
    const auth = decryptAuth(req.get('Authorization'))
    User.findOne({
      email: auth.email
    }, (err, doc) => {
      if (err) {
        Logger.log(err)
        res.status(500).end();
      } else if (doc === null) {
        res.json({
          error: Errors.userNotFound
        })
      } else {
        if (!doc.validatePassword(auth.password)) {
          res.status(403).json({
            error: httpMessages['403']
          })
        } else {
          // user.storagePath = doc.storagePath
          doc.firstName = req.body.firstName || doc.firstName
          doc.secondName = req.body.secondName || doc.secondName
          doc.email = req.body.email || auth.email
          req.body.pricingPlan ? doc.pricingPlan = {
            title: req.body.pricingPlan.title,
            price: req.body.pricingPlan.price,
            size: req.body.pricingPlan.size,
          } : doc.pricingPlan = doc.pricingPlan
          if (req.body.password) {
            doc.setPassword(req.body.password)
          }

          doc.save((err) => {
            if (err) {
              Logger.log(err)
              res.status(500).end()
            } else {
              res.json(req.body)
            }
          })
        }
      }
    })
  }
})

// path to delete an existing user
userRouter.delete('/user', (req, res, next) => {
  // basic authentication must be sent
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
      res.status(500).end();
    } else if (doc === null) {
      res.json({
        error: Errors.userNotFound
      })
    } else {
      if (!doc.validatePassword(auth.password)) {
        res.status(403).json({
          error: httpMessages['403']
        })
      } else {
        doc.deleteStorage()
        User.deleteOne({
          email: auth.email
        }, (err) => {
          if (err) {
            Logger.log(err)
            res.status(500).end()
          } else {
            res.json({
              email: auth.email
            })
          }
        })
      }
    }
  })
})

module.exports = userRouter;
