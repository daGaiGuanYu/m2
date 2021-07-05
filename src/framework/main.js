const EmittedEvent = require('fldao/polyfill/emitted-event')

require('../common/log')
const initModel = require('./model/init')

const evt = new EmittedEvent()

initModel(evt)
