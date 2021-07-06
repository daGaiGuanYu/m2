require('../common/log')
const evt = require('./app-hook')

module.exports = function(ctx, callback) {
  const log = console.log.create('初始化项目')

  require('./model/init')()
  require('./router/init')()

  let initted = 0
  evt.onModelOK(function() {
    initted++
    check()
  })
  evt.onRouterOK(function() {
    initted++
    check()
  })
  function check() {
    if(initted == 2)
      evt.emitInitialized()
  }

  evt.onInitialized(function() {
    log.success()
    callback()
  })

  evt.onInitErr(function(err = '项目初始化时发生异常') {
    log.error(err)
    callback(err)
  })
}
