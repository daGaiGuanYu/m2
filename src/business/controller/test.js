const Adder = require('../../framework/router/route-adder').adder

const model = require('../model/test')

const adder = new Adder()

adder.get('/', function(ctx) {
  ctx.responseJson({
    name: 2
  })
})

adder.post('/', async function(ctx) {
  const result = await model.insert({
    name: 'test',
    tel: 1234,
    arr: [1,2,3]
  })
  ctx.responseJson(result)
})