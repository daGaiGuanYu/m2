const { MongoClient } = require('mongodb')

const { onetime } = require('../common/func')

exports.connect = onetime('已建立过 mongodb 连接', function(evt, username, password) {
  const log = console.log.create('建立 mongodb 连接')
  log.doing()
  const uri = `mongodb+srv://${username}:${password}@memory2.mrswz.mongodb.net/m2?retryWrites=true&w=majority`
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  client.connect( err => {
    if(err)
      log.error(err)
    else {
      log.success()
      evt.emit('model-connectted', client)
    }
  })
})