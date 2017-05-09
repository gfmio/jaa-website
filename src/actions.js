
present = require('./model').present

module.exports = {
  transitionTo: function(page) {
    present({ currentUrl: page })
    return false
  }
}
