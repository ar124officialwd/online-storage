const readDirectory = require('./read-directory')
const Directory = require('../models/directory.model')

describe('Unit test of readDirectory(): ', () => {
  it('should return an instance of Directory', async () => {
    await expectAsync(readDirectory('/home/ar')).toBeResolved()
  })
})