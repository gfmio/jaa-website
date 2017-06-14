
const c = require('csam/lib/component')
const TabView = require('../../uikit/tab-view')

const April2014Newsletter = require('./newsletters/2014-04')
const July2014Newsletter = require('./newsletters/2014-07')
const November2014Newsletter = require('./newsletters/2014-11')
const March2015Newsletter = require('./newsletters/2015-03')
const July2015Newsletter = require('./newsletters/2015-07')
const Novemberl2015Newsletter = require('./newsletters/2015-11')
const October2016Newsletter = require('./newsletters/2016-10')

const newsletterTabs = [{
  title: 'April 2014',
  content: <April2014Newsletter />,
}, {
  title: 'July 2014',
  content: <July2014Newsletter />,
}, {
  title: 'November 2014',
  content: <November2014Newsletter />,
}, {
  title: 'March 2015',
  content: <March2015Newsletter />,
}, {
  title: 'July 2015',
  content: <July2015Newsletter />,
}, {
  title: 'November 2015',
  content: <Novemberl2015Newsletter />,
}, {
  title: 'October 2016',
  content: <October2016Newsletter />,
}]

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Newsletters</h1>

      <figure>
        <img src="/media/what-we-do/newsletter_logo_V2.jpg" />
      </figure>

      <TabView tabNavId="newsletter-tabs" pages={ newsletterTabs.reverse() } />
    </article>
  )
}
