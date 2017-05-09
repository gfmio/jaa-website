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

const Layout = require('./components/layout')
const ErrorPage = require('./components/errorpage')
const HomePage = require('./components/homepage')

const DesignTest = require('./components/designtest')

const model = function() {
  this.currentTitle = ''
  this.children = []

  this.currentView = function() {
    return (
      <Layout title={ this.currentTitle + ' - Jacobs Alumni Association' }>
        { this.children }
      </Layout>
    )
    // matchedRoute = this.router.match(this.currentUrl)
    // console.log(this.currentUrl, matchedRoute)
    return
  }

  // Model update function
  // Return true to update the state and re-render
  this.present = function(data) {
    if ('currentUrl' in data) {
      this.currentUrl = data.currentUrl

      switch (this.currentUrl) {
        case '/':
          this.children = [<HomePage />]
          this.currentTitle = 'Home'
          break
        case '/designtest':
          this.children = [<DesignTest />]
          this.currentTitle = 'Design Test'
          break
        default:
          this.children = [<ErrorPage errorCode={404} />]
          this.currentTitle = 'Page Not Found - Error 404'
          break
      }

      return true
    }

    return false
  }
}

module.exports = Model(new model(), require('./state'))
