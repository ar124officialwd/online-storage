const http = require('http')
const querystring = require('querystring')
const app = require('../app')
const axios = require('axios').default
const pricingPlans = require('../business/business').getPricingPlans()

const url = 'http://127.0.0.1:3000/user'
const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/user',
  method: '',
}

const user = {
  'firstName': 'Ahmad',
  'secondName': 'Raza',
  'email': 'ar124officialcontact@gmail.com',
  'password': 'jdislfhskdsl',
  'pricingPlan': JSON.parse(JSON.stringify(pricingPlans[0]))
}

const userPatch = {
  firstName: 'Hassan',
  secondName: 'Ali'
}

let authWithPassword = 'ar124officialcontact@gmail.com:jdislfhskdsl'
const authWithPasswordEncrypted = Buffer.from(authWithPassword).toString('base64')
authWithPassword = 'Basic ' + authWithPasswordEncrypted

let auth = 'ar124officialcontact@gmail.com'
const authEncrypted = Buffer.from(auth).toString('base64')
auth = 'Basic ' + authEncrypted

describe("Unit Testing of 'User' Router", () => {

  /*
  beforeAll(() => {
    app.listen(3000)
  })
  */

  it('should insert a user', async () => {
    const post = function() {
      return axios.post(url, user, {
        method: 'post',
      })
    }

    await expectAsync(post()).toBeResolved()
  })

  it('should verify user existance', async () => {
    const get = function() {
      return axios.get(url, {
        headers: {
          'Authorization': auth
        }
      })
    }

    await expectAsync(get()).toBeResolved()
  })

  it('should validate user', async () => {
    options.method = 'GET'

    const get = function() {
      return axios.get(url, {
        headers: {
          'Authorization': authWithPassword
        }
      })
    }

    await expectAsync(get()).toBeResolved()
  })

  it('should update user', async () => {
    options.method = 'PATCH'

    const patch = function() {
      return axios.patch(url, userPatch, {
        method: 'patch',
        headers: {
          'Authorization': authWithPassword
        }
      });
    }

    await expectAsync(patch()).toBeResolved()
  })

  it('should delete user', async () => {

    const request = function() {
      return axios.delete(url, {
        method: 'delete',
        headers: {
          'Authorization': authWithPassword
        }
      });
    }

    await expectAsync(request()).toBeResolved()
  })

})
