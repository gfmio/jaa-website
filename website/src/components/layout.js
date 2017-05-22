
const c = require('csam/lib/component')
const Application = require('./application')
const Header = require('./header')
const Footer = require('./footer')
const OffCanvasNavigation = require('./offcanvasnavigation')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <Application title={ props.title }>
      <div class="fill">
        <Header />
        <div class="main-container uk-padding header-top-margin">
          { children}
        </div>
      </div>
      <OffCanvasNavigation />
      <div>
        <Footer />
      </div>
    </Application>
  )
}
