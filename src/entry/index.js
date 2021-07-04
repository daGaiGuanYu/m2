const GError = require('../common/error')

async function init() {
  const username = process.env.username
  const password = process.env.password
  if(!username || !password)
    throw GError('username or password (on process.env) not set')
  
}



module.exports.handler = function() {
  
}