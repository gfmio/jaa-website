//
// Server side script
//

Server = require('csam/lib/server')

const server = Server({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  publicDir: './dist/public',
  model: require('./model'),
  state: require('./state'),
  actions: require('./actions')
}).run()
