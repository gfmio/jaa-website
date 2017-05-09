
const State = require('csam/lib/state')

module.exports = State({
  representation: function(model) {
    this.display({
      status: 200,
      component: model.currentView()
    })
  },
  nextAction: function(model) {
    // ...
  }
})
