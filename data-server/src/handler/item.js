const Reaper = require('../framework/router').Reaper
const model = require('../model/item')
const ObjectId = require('mongodb').ObjectId
const reaper = Reaper('/item')

reaper.get(function() {
  return model.find()
})

reaper.post(async function({ getJson }) {
  return model.insertOne(await getJson())
})

reaper.delete(function({ request }) {
  return model.deleteOne({
    _id: ObjectId(request.queries.id)
  })
})

reaper.put(async function({ request, getJson }) {
  return model.updateOne({
    _id: ObjectId(request.queries.id)
  }, {
    $set: await getJson()
  })
})