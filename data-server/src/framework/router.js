const Router = require('@ppzp/http-router')

module.exports = Router({
  preHandlerList: [
    function(ctx, meat) {
      ctx.res.json = function(data) {
        return ctx.res.send(JSON.stringify(data))
      }
      meat(ctx)
    }
  ]
})

require('../controller/test')