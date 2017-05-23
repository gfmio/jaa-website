
const c = require('csam/lib/component')
const Application = require('./application')
const Header = require('./header')
const Footer = require('./footer')
const OffCanvasNavigation = require('./offcanvasnavigation')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <Application title={ props.title } keywords={ props.keywords } description={ props.description } >
      <div class="fill uk-offcanvas-content">
        <Header />
        <div class="main-container uk-padding header-top-margin">
          { children}
        </div>
      </div>
      <div class="uk-offcanvas-content">
        <Footer />
      </div>
      <OffCanvasNavigation />
    </Application>
  )
}
