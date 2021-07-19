const getHandler = require('../framework/router').getHandler
const { handle404, handle500 } = require('../handler/error')
const writeJson = require('./write-json')
const Exception = require('./exception')
const RequestContext = require('./request-context')

module.exports = async function(req, res, aliyunFCContext) {
  const { method, path } = req
  console.debug(method, path)

  const handler = getHandler(method, path)
  const context = RequestContext(req, res, aliyunFCContext)
  if(!handler)
    return handle404(context)
  try {
    writeJson(res, {
      errCode: 0,
      data: await handler(context)
    })
  } catch(error) {
    if(error instanceof Exception.NBug)
      writeJson(error)
    else
      handle500(context, error)
  }
}