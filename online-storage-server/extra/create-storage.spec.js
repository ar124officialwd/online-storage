const createStorage = require('./create-storage')

describe('Test of createStorage(): ', () => {
  it('should create a storage', async () => {
    await expectAsync(createStorage('ar124@gm.com',
      'ahmad', 'raza'))
      .toBeResolvedTo('/disk/mounts/razaar124gmcomahmad' ||
        '/disk/projects/online-storage/mounts/razaar124gmcomahmad')
  })
})