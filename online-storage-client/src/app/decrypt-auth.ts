export function decryptAuth(authString) {
  const authStr = Buffer.from(authString, 'base64');
  const decryptedAuthStr = authStr.toString('utf8');

  return {
    email: decryptedAuthStr.split(':')[0],
    password: decryptedAuthStr.split(':')[1],
  };
}
