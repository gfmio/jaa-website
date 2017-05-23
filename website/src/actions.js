
module.exports = {
  transitionTo: function transitionTo(url) {
    present({ currentUrl: url })
    return false
  }
}
