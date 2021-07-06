const fs = require('fs')
const Path = require('path')
const { MongoClient } = require('mongodb')

const appHook = require('../app-hook')

module.exports = async function() {
  const log = console.log.create('初始化 model')
  
  try {
    const timer = new Date()
    const client = await connect()
    console.log(`mongodb 连接用时 ${(new Date() - timer) / 1000}s`)
    await setCollection(client)
    log.success()
    appHook.emitModelOK()
  } catch(err) {
    log.error(err)
  }
}

function connect() {
  return new Promise( (res, rej) => {
    const log = console.log.create('建立 mongodb 连接')
  
    if(!process.env.mongo) {
      log.error('环境变量 [mongo] 未设置')
      return rej()
    }

    try {
      var { user, password, host, db } = JSON.parse(process.env.mongo)
    } catch(e) {
      log.error(`环境变量 [mongo] 解析异常`)
      return rej()
    }

    if(!(user && password && host && db)){
      log.error(`环境变量 [user: ${user}; password: ${password}; host: ${host}; db: ${db}] 设置异常`)
      return rej()
    }
  
    const uri = `mongodb+srv://${user}:${password}@${host}/${db}?retryWrites=true&w=majority`
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
    const dir = Path.join(__dirname, '../../business/model/')
    fs.readdir(dir, (err, fileList) => {
      if(err) {
        log.error(err)
        return rej()
      }
      
      for(let file of fileList) {
        const path = dir + file
        console.log('[model]', path)
        const collection = require(path)
        collection.collection = client.db().collection(collection.name)
      }
      res()
      log.success()
    })
  })
}