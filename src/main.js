const Events = require('events')

require('./common/log')
const model = require('./model')

const evt = new Events()

const { atlasUser, atlasPassword } = process.env
if(!atlasUser || !atlasPassword)
  throw Error('环境变量 [atlas 账密] 未设置？')
model.connect(evt, atlasUser, atlasPassword)
