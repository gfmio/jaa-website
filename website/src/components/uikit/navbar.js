
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
              <li class="uk-active"><a href="">ABC</a></li>
              <li class="uk-parent"><a href="">DEF</a></li>
              <li><a href="">GHI</a></li>
          </ul>
      </div>
  </nav>
  )
}
