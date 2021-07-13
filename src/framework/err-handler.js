exports.handle404 = function({ res }) {
  res.send('404')
}

exports.handle500 = function({ res }) {
  res.send('500')
}