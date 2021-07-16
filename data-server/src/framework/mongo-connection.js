const Connection = require('@ppzp/mongo').ClientConnection

const config = JSON.parse(process.env.mongo)
module.exports = Connection(config)