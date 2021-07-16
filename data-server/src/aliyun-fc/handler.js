const route = require('../framework/router').route
const { handle404, handle500 } = require('../framework/err-handler')

module.exports = async function(req, res, ctx) {
  const { method, path } = req
  console.debug(method, path)

  const handler = route[method] && route[method][path] || handle404
  const context = { req, res, ctx }
  try {
    await handler(context)
  } catch(error) {
    handle500({ error, ...context })
  }
}