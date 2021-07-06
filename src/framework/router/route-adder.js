const makeSwch = require('../../common/make-swch')

const route = exports.route = {
  GET: {},
  POST: {},
  DELETE: {}
}

function add(method, path, ...handlerList) {
  path = this.path + path
  if(route[method][path])
    throw Error('有重复的路由')

  route[method][path] = makeSwch(...this.handlerList, ...handlerList)
}

exports.adder = class {
  constructor(path, ...handlerList) {
    this.path = path || ''
    this.handlerList = handlerList || []
  }

  get() {
    add.call(this, 'GET', ...arguments)
  }
  post() {
    add.call(this, 'POST', ...arguments)
  }
  delete() {
    add.call(this, 'DELETE', ...arguments)
  }
}
