const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) // parametro enviado para o routes que está dentro do server.js
