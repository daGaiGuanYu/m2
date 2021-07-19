module.exports = function(res, data) {
  res.setHeader('Content-type', 'application/json')
  res.send(JSON.stringify(data))
}