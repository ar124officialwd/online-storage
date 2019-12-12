const decryptAuth = require('./decrypt-auth')

describe('Unit Test of decryptAuth:', () => {
  it('should test verify decryptAuth work to be expected', () => {
    let someAuth = 'admin:hsidkelshjh32'
    const someAuthBase64 = Buffer.from(someAuth).toString('base64')
    let auth = 'Basic ' + someAuthBase64

    expect(decryptAuth(auth)).toEqual({
      email: 'admin',
      password: 'hsidkelshjh32'
    }, 'Error validating returned object')
  })
})
