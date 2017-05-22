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
    const AlumniCharterPage = require('./components/pages/whoweare/alumni-charter')
    const ContributionsByLawsPage = require('./components/pages/whoweare/contributions-by-laws')
  const AlumniBoardPage = require('./components/pages/whoweare/alumni-board')
    const BoardNewsPage = require('./components/pages/whoweare/board-news')
    const ElectionsPage = require('./components/pages/whoweare/elections')
  const ClassRepsPage = require('./components/pages/whoweare/class-reps')
  const AlumniProfilesPage = require('./components/pages/whoweare/alumni-profiles')

const WhatWeDoPage = require('./components/pages/whatwedo')
  const NewsletterPage = require('./components/pages/whatwedo/newsletter')
  const CampusNewsPage = require('./components/pages/whatwedo/campusnews')
  const HomecomingPage = require('./components/pages/whatwedo/homecoming')
    const Homecoming2016Page = require('./components/pages/whatwedo/homecoming2016')
    const Homecoming2015Page = require('./components/pages/whatwedo/homecoming2015')
    const Homecoming2014Page = require('./components/pages/whatwedo/homecoming2014')
  const AlumniProjectsPage = require('./components/pages/whatwedo/alumni-projects')
    const AlumniConsultingInitiativePage = require('./components/pages/whatwedo/alumni-consulting-initiative')
    const GenerationFundPage = require('./components/pages/whatwedo/generation-fund')
    const AlumniScholarshipsPage = require('./components/pages/whatwedo/alumni-scholarships')

const GetInvolvedPage = require('./components/pages/get-involved')
  const AlumniChapters = require('./components/pages/get-involved/alumni-chapters')
    const WhatIsAnAlumniChapterPage = require('./components/pages/get-involved/what-is-an-alumni-chapter')
    const StartingAChapterPage = require('./components/pages/get-involved/starting-a-chapter')
  const DonatePage = require('./components/pages/get-involved/donate')
  const AlumniOfficePage = require('./components/pages/get-involved/alumni-office')

const SignupPage = require('./components/pages/signup')
const SignupCompletePage = require('./components/pages/signup-complete')

const PrivacyPage = require('./components/pages/privacy')
const ImprintPage = require('./components/pages/imprint')

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
        '/alumni-charter': { children: [<AlumniCharterPage />], currentTitle: 'Alumni charter' },
        '/contributions-by-laws': { children: [<ContributionsByLawsPage />], currentTitle: 'Contributions By-Laws' },
      '/alumni-board': { children: [<AlumniBoardPage />], currentTitle: 'Alumni Board' },
        '/board-news': { children: [<BoardNewsPage />], currentTitle: 'Board news' },
        '/elections': { children: [<ElectionsPage />], currentTitle: 'Elections' },
      '/class-reps': { children: [<ClassRepsPage />], currentTitle: 'Class reps' },
      '/alumni-profiles': { children: [<AlumniProfilesPage />], currentTitle: 'Alumni profiles' },

    '/what-we-do': { children: [<WhatWeDoPage />], currentTitle: 'What we do' },
      '/newsletter': { children: [<NewsletterPage />], currentTitle: 'Newsletter' },
      '/campus-news': { children: [<CampusNewsPage />], currentTitle: 'Campus News' },
      '/homecoming': { children: [<HomecomingPage />], currentTitle: 'Homecoming' },
        '/homecoming/2016': { children: [<Homecoming2016Page />], currentTitle: 'Homecoming 2016' },
        '/homecoming/2015': { children: [<Homecoming2015Page />], currentTitle: 'Homecoming 2015' },
        '/homecoming/2014': { children: [<Homecoming2014Page />], currentTitle: 'Homecoming 2014' },
      '/alumni-projects': { children: [<AlumniProjectsPage />], currentTitle: 'Alumni Projects' },
        '/alumni-projects/alumni-consulting-initiative': { children: [<AlumniConsultingInitiativePage />], currentTitle: 'Alumni Consulting Initiative' },
        '/alumni-projects/generation-fund': { children: [<GenerationFundPage />], currentTitle: 'Generation Fund' },
        '/alumni-projects/alumni-scholarships': { children: [<AlumniScholarshipsPage />], currentTitle: 'Alumni Scholarships' },

    '/get-involved': { children: [<GetInvolvedPage />], currentTitle: 'Get InvolvedPage' },
      '/alumni-chapters': { children: [<AlumniChapters />], currentTitle: '' },
        '/alumni-chapters/what-is-an-alumni-chapter': { children: [<WhatIsAnAlumniChapterPage />], currentTitle: 'What is an alumni chapter?' },
        '/alumni-chapters/starting-a-chapter': { children: [<StartingAChapterPage />], currentTitle: 'Starting a Chapter' },
      '/donate': { children: [<DonatePage />], currentTitle: 'Donate' },
      '/alumni-office': { children: [<AlumniOfficePage />], currentTitle: 'Alumni Office' },

    '/blog': { children: [<Blog />], currentTitle: 'Alumni Blog' },
      '/blog/losing-my-religion-part-2': { children: [<Article />], currentTitle: 'Losing my Religion - Part 2 - Alumni Blog' },
    '/shop': { children: [<Shop />], currentTitle: 'Online Shop' },

    '/join': { children: [<SignupPage />], currentTitle: 'Join the Jacobs Alumni Association' },
    '/join/complete': { children: [<SignupCompletePage />], currentTitle: 'Welcome to the Jacobs Alumni Association' },

    '/privacy': { children: [<PrivacyPage />], currentTitle: 'Privacy Policy' },
    '/imprint': { children: [<ImprintPage />], currentTitle: 'Imprint / Impressum' },
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
