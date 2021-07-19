const writeJson = require('../framework/write-json')
const Exception = require('../framework/exception')

const err404 = new Exception.NBug('未识别请求', 404)
exports.handle404 = function(ctx) {
  console.error('404', ctx.request.method, ctx.request.path)
  writeJson(ctx.response, err404)
}

const err500 = new Exception.NBug('未知错误', 500) // 这里只是借助 NBug 的 toJson 方法
exports.handle500 = function(ctx, error) {
  console.error('未捕获的异常:')
  console.error(error)
  
  writeJson(ctx.response,
    error instanceof Exception.Bug ? err : err500
  )
}