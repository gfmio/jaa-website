//
// Client side script
//

if (Object.assign == undefined) {
  Object.assign = require('object-assign')
}

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
