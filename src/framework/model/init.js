const fs = require('fs')
const Path = require('path')
const { MongoClient } = require('mongodb')
const onlyOne = require('fldao/func/func/only-one')

module.exports = onlyOne('model 已初始化，或正在初始化', async function(evt) {
  const log = console.log.create('初始化 model')
  log.doing()
  try {
    const client = await connect()
    await setCollection(client)
    log.success()
    evt.emit('model-ready')
  } catch(err) {
    log.error(err)
  }
})

function connect() {
  return new Promise( (res, rej) => {
    const log = console.log.create('建立 mongodb 连接')
    log.doing()
  
    const { atlasUser, atlasPassword } = process.env
    if(!atlasUser || !atlasPassword){
      log.error('环境变量 [atlas 账密] 未设置')
      return rej()
    }
  
    const uri = `mongodb+srv://${atlasUser}:${atlasPassword}@memory2.mrswz.mongodb.net/m2?retryWrites=true&w=majority`
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    client.connect( err => {
      if(err) {
        log.error(err)
        rej()
      } else {
        log.success()
        res(client)
      }
    })
  })
}

function setCollection(client) {
  return new Promise( (res, rej) => {
    const log = console.log.create('设置 collection')
    log.doing()
    const dir = Path.join(__dirname, '../../model/')
    fs.readdir(dir, (err, fileList) => {
      if(err) {
        log.error(err)
        return rej()
      }
      
      for(let file of fileList) {
        const collectionPath = dir + file
        console.log('[model]', collectionPath)
        require(collectionPath).setCollection(client)
      }
      res()
      log.success()
    })
  })
}