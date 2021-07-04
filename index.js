const { MongoClient } = require('mongodb')
const getRawBody = require('raw-body')

const getMongoClient = new Promise( (res, rej) => {
  console.log('建立 mongo 连接...')
  const username = process.env.atlasUsername
  const password = process.env.atlasPassword
  const uri = `mongodb+srv://${username}:${password}@memory2.mrswz.mongodb.net/m2?retryWrites=true&w=majority`
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  client.connect( err => {
    if(err)
      rej(err)
    else {
      console.log('mongodb 连接建立成功')
      res(client)
    }
  })
})

exports.handler = function(req, res) {
  getRawBody(req, async function(err, body) {
    const model = (await getMongoClient).db('test').collection('haha')
    const result = await model.insertOne(JSON.parse(body.toString()))
    res.send(JSON.stringify(result))
  })
  
}