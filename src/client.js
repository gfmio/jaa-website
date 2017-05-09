//
// Client side script
//

Client = require('csam/lib/client')

const main = function() {
  Client({
    model: require('./model'),
    state: require('./state'),
    actions: require('./actions')
  }).init({
    currentUrl: window.location.pathname
  })
}

main()
