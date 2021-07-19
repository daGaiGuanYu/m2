module.exports = function(ctx, callback) {
  console.info('\n项目启动...')

  require('../framework/mongo-connection').onConnectted(function() {
    console.info('mongo 已连接')
    callback()
  })

  require('../framework/router')
}