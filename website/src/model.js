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
const Shop = require('./components/shop/shop')
const Blog = require('./components/blog/blog')
const Article = require('./components/blog/article')

// const DesignTest = require('./components/designtest')

const WhoWeArePage = require('./components/pages/whoweare')
const AlumniAssocationPage = require('./components/pages/whoweare/alumni-association')
const WhatWeDoPage = require('./components/pages/whatwedo')
const GetInvolvedPage = require('./components/pages/get-involved')
const SignupPage = require('./components/pages/signup')
const PrivacyPage = require('./components/pages/privacy')
const ImprintPage = require('./components/pages/imprint')

const smc = require('snabbdom/modules/class')
console.log(smc)

const model = function() {
  //
  // Routing and view updating
  //

  this.currentTitle = ''
  this.children = []

// '/designtest': { children: [<DesignTest />], currentTitle: 'Design Test' },

  this.routes = {
    '/': { children: [<HomePage />], currentTitle: 'Home' },
    '/who-we-are': { children: [<WhoWeArePage />], currentTitle: 'Who we are' },
      '/alumni-association': { children: [<AlumniAssocationPage />], currentTitle: 'Alumni association' },
    '/what-we-do': { children: [<WhatWeDoPage />], currentTitle: 'What we do' },
    '/get-involved': { children: [<GetInvolvedPage />], currentTitle: 'Get InvolvedPage' },
    '/blog': { children: [<Blog />], currentTitle: 'Alumni Blog' },
      '/blog/losing-my-religion-part-2': { children: [<Article />], currentTitle: 'Losing my Religion - Part 2 - Alumni Blog' },
    '/shop': { children: [<Shop />], currentTitle: 'Online Shop' },
    '/join': { children: [<SignupPage />], currentTitle: 'Join' },
    '/privacy': { children: [<PrivacyPage />], currentTitle: 'Privacy Policy' },
    '/imprint': { children: [<ImprintPage />], currentTitle: 'Imprint / Impressum' },
    '/what-we-do': { children: [<WhatWeDoPage />], currentTitle: 'What we do' },
    '/what-we-do': { children: [<WhatWeDoPage />], currentTitle: 'What we do' },
  }

  this.defaultRoute ={
    children: [<ErrorPage errorCode={404} />],
    currentTitle: 'Page Not Found - Error 404'
  }

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

  this.updateModel = function(newModel) {
    for (var key in newModel) {
      this[key] = newModel[key]
    }
  }

  //
  // Model update function
  // Return true to update the state and re-render
  //

  this.present = function(data) {
    if ('currentUrl' in data) {
      var newModel = { currentUrl: data.currentUrl }

      if (data.currentUrl in this.routes) {
        Object.assign(newModel, this.routes[data.currentUrl])
      } else {
        Object.assign(newModel, this.defaultRoute)
      }

      this.updateModel(newModel)

      return true
    }

    return false
  }
}

module.exports = Model(new model(), require('./state'))
