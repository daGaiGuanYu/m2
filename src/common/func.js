const Error = require('./error')

exports.singleton = function(createTarget) {
  const target = createTarget()
  return () => target
}

exports.onetime = function(msg, job) {
  let done = false
  return function() {
    if(done)
      throw Error(msg)
    done = true
    return job()
  }
}