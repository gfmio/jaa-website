
const c = require('csam/lib/component')
const Application = require('./application')
const Header = require('./header')
const Footer = require('./footer')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <Application title={ props.title }>
      <div class="fill">
        <Header />
        { children}
      </div>
      <div>
        <Footer />
      </div>
    </Application>
  )
}
