function decryptAuth(authString) {
  let authStr = authString.split(' ')[1]
  let auth = Buffer.from(authStr, 'base64')
  let decryptedAuthStr = auth.toString('utf8')

  return {
    email: decryptedAuthStr.split(':')[0],
    password: decryptedAuthStr.split(':').slice(1).join()
  }
}

module.exports = decryptAuth
