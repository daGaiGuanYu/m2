/**
 * app 各生命周期 hook
 * 使用固定的名字，防止事件过多，导致太乱
 */

const EmittedEvent = require('fldao/polyfill/emitted-event')

const evt = new EmittedEvent()
let name

name = 'model-connected'
exports.emitModelOK = emit(name)
exports.onModelOK = on(name)

name = 'router-built'
exports.emitRouterOK = emit(name)
exports.onRouterOK = on(name)

name = 'initialized'
exports.emitInitialized = emit(name)
exports.onInitialized = on(name)

name = 'init-err'
exports.emitInitErr = emit(name)
exports.onInitErr = on(name)

// util

function emit(name) {
  return function() {
    evt.emit(name, ...arguments)
  }
}
function on(name) {
  return function(handler) {
    evt.on(name, handler)
  }
}