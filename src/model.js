//
// Application data model
//

const Model = require('csam/lib/model')

// const router = require('csam-router')
// const Router = router.Router
// const Route = router.Route
// const IndexRoute = router.IndexRoute
// const NotFoundRoute = router.NotFoundRoute

const c = require('csam/lib/component')

const Application = require('./components/application')
const ErrorPage = require('./components/errorpage')
const HomePage = require('./components/homepage')

const model = function() {
  this.currentView = function() {
    // matchedRoute = this.router.match(this.currentUrl)
    // console.log(this.currentUrl, matchedRoute)
    return <Application title="JAA Website">
      <div>Home</div>
    </Application>
  }

  // Model update function
  // Return true to update the state and re-render
  this.present = function(data) {
    if ('currentUrl' in data) {
      this.currentUrl = data.currentUrl
      return true
    }

    return false
  }
}

module.exports = Model(new model(), require('./state'))
