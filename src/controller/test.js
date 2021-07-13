const Reaper = require('../framework/router').Reaper
const model = require('../model/test')

const reaper = Reaper()

reaper.get('/', async function({ req, res }) {
  const result = await model.find()
  res.json(result)
})