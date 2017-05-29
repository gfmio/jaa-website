
const c = require('csam/lib/component')

const NavBar = require('./uikit/navbar')

const Link = require('./uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  props.loginLink = '//api.dev.jacobs-alumni.de/login/google'

  var toggleOffCanvas = function(e) {
    UIkit.offcanvas('#off-canvas').toggle()
  }

  return (
    <header class="uk-sticky uk-sticky-fixed uk-width-1-1" style={{ position: 'fixed', top: '0', width: '100%' }}>
      <div class="uk-navbar-container navbar uk-dark">
        <nav class="uk-navbar">
          <div class="uk-navbar-left">
            <Link href="/" class="uk-navbar-item uk-logo">
              <span class="logo-button uk-margin-small-right">
                <img src="/media/favicon.png" />
              </span>
              <span class="uk-visible@s">Growth Mindset Podcast</span>
            </Link>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav uk-visible@l">
              <li><Link class="uk-active" href="/">Home</Link></li>
              <li class="uk-inline">
                <Link href="/podcast">Season 1</Link>

                <div class="uk-background-muted uk-dropdown uk-dark" uk-dropdown="pos: bottom-justify">
                  <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-text-bold"><Link href="/podcast/intro">Sam Harris - What's going on?</Link></li>
                    <li class="uk-nav-divider"></li>
                    <li><Link href="/podcast/tomiwa-adey">Tomiwa Adey - Startup Bakery</Link></li>
                    <li><Link href="/dean">Dean Hume - Settled</Link></li>
                    <li><Link href="/harsh">Harsh Sinha - Transferwise</Link></li>
                  </ul>
                </div>

              </li>

            </ul>
            <div class="uk-navbar-item">
              <Link href="/join" class="uk-button uk-button-primary rounded bg-transparent uk-text-primary">
                Subscribe
              </Link>
            </div>
            <a href="#" class="uk-navbar-toggle uk-navbar-toggle-icon uk-icon uk-hidden@l" uk-toggle="target: #off-canvas">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="navbar-toggle-icon" ratio="1">
                <rect y="9" width="20" height="2">
                </rect>
                <rect y="3" width="20" height="2">
                </rect>
                <rect y="15" width="20" height="2">
                </rect>
              </svg>
              <span uk-navbar-toggle-icon></span>
              <span class="uk-margin-small-left">Menu</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
