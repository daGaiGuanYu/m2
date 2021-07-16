const Collection = require('@ppzp/mongo').Collection
const clientConnection = require('../framework/mongo-connection')

module.exports = Collection({
  clientConnection,
  name: 'test'
})