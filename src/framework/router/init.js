const fs = require('fs')
const Path = require('path')

const appHook = require('../app-hook')

module.exports = async function() {
  const log = console.log.create('初始化 router')

  const dir = Path.join(__dirname, '../../business/controller/')
  fs.readdir(dir, (err, fileList) => {
    if(err){
      log.error(err)
      appHook.emitInitErr()
    }
    for(let file of fileList) {
      const path = dir + file
      console.log('[controller]', path)
      require(path)
    }
    log.success()
    appHook.emitRouterOK()
  })
}