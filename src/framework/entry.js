const route = require('./router/route-adder').route
const HandlerHelper = require('./handler-helper')

module.exports = function(req, res, ctx) {
  const path = req.path
  const method = req.method
  if(route[method] && route[method][path])
    route[method][path](
      new HandlerHelper(req, res, ctx)
    )
  else {
    console.log(404, method, path)
    res.send(JSON.stringify(route))
  }
}