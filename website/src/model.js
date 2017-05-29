//
// Application data model
//

const Model = require('csam/lib/model')

const c = require('csam/lib/component')

const podcasts = require('./models/podcasts')

const Layout = require('./components/layout')
const ErrorPage = require('./components/errorpage')
const HomePage = require('./components/homepage')
const Season = require('./components/podcasts/season')
const Podcast = require('./components/podcasts/podcast')

// const GetInvolvedPage = require('./components/pages/get-involved')
//   const AlumniChapters = require('./components/pages/get-involved/alumni-chapters')
//     const WhatIsAnAlumniChapterPage = require('./components/pages/get-involved/what-is-an-alumni-chapter')
//     const StartingAChapterPage = require('./components/pages/get-involved/starting-a-chapter')
//     const ChapterFAQPage = require('./components/pages/get-involved/chapter-faq')
//   const DonatePage = require('./components/pages/get-involved/donate')
//   const AlumniOfficePage = require('./components/pages/get-involved/alumni-office')


const model = function() {
  //
  // Routing and view updating
  //

  this.currentTitle = ''
  this.children = []

  this.routes = {
    '/': { children: [<HomePage />], currentTitle: 'Home' },

    // '/get-involved': { children: [<GetInvolvedPage />], currentTitle: 'Get Involved!' },
    //   '/alumni-chapters': { children: [<AlumniChapters />], currentTitle: '' },
    //     '/alumni-chapters/what-is-an-alumni-chapter': { children: [<WhatIsAnAlumniChapterPage />], currentTitle: 'What is an alumni chapter?' },
    //     '/alumni-chapters/starting-a-chapter': { children: [<StartingAChapterPage />], currentTitle: 'Starting a Chapter' },
    //     '/alumni-chapters/faq': { children: [<ChapterFAQPage />], currentTitle: 'Alumni Chapters - FAQ' },
    //   '/donate': { children: [<DonatePage />], currentTitle: 'Donate' },
    //   '/alumni-office': { children: [<AlumniOfficePage />], currentTitle: 'Alumni Office' },

    '/podcast': { children: [<Season podcasts={ podcasts } />], currentTitle: 'Season 1' },

  }

  for (var n in podcasts) {
    var podcast = podcasts[n]
    console.log(podcast.alias)
    var podcastLink = '/podcast/' + podcast.alias
    console.log(<Podcast podcast={ podcast } />)
    this.routes[podcastLink] = { children: [<Podcast podcast={ podcast } />], currentTitle: podcast.title }
  }

  this.defaultRoute = {
    children: [<ErrorPage errorCode={404} />],
    currentTitle: 'Page Not Found - Error 404'
  }

  this.description = 'The Growth Mindset Podcast documents experiences from amazing individuals to inspire you to try something crazy.'
  this.keywords = [
    'Growth Mindset Podcast',
    'Sam Harris',
    'CTO',
    'Tech',
    'Podcast',
    'Entrepreneur',
    'Founder',
    'Bremen'
  ]

  this.currentView = function() {
    console.log(this.children)
    return (
      <Layout title={ this.currentTitle + ' - Growth Mindset Podcast' } keywords={ this.keywords } description={ this.description } >
        { this.children }
      </Layout>
    )
  }

  this.updateModel = function(newModel) {
    for (var key in newModel) {
      this[key] = newModel[key]
    }
  }

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
