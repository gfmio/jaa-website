
const c = require('csam/lib/component')

const NavBar = require('./uikit/navbar')

const RoundImage = require('./roundimage')

module.exports = function(props, children) {
  var props = props || {}

  props.loginLink = '//api.dev.jacobs-alumni.de/login/google'

  var toggleOffCanvas = function(e) {
    console.log(UIkit.offcanvas('#off-canvas'))
    UIkit.offcanvas('#off-canvas').toggle()
  }

  return (
    <header class="uk-sticky uk-sticky-fixed uk-width-1-1" style={{ position: 'fixed', top: '0', width: '100%' }}>
      <div class="uk-navbar-container navbar uk-dark">
        <nav class="uk-navbar">
          <div class="uk-navbar-left">
            <a href="/" class="uk-navbar-item uk-logo">
              <span class="logo-button uk-margin-small-right">
                <img src="/media/favicon.png" />
              </span>
              <span class="uk-visible@s">Jacobs Alumni Association</span>
            </a>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav uk-visible@l">
              <li><a class="uk-active" href="/">Home</a></li>
              <li class="uk-inline">
                <a href="/who-we-are">Who We Are</a>

                <div class="uk-background-muted uk-dropdown uk-dark" uk-dropdown="pos: bottom-justify">
                  <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-text-bold"><a href="/alumni-association">Alumni Association</a></li>
                    <li><a href="/alumni-charter">Alumni Charter</a></li>
                    <li><a href="/contributions-by-laws">Contributions By-laws</a></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-bold"><a href="/alumni-board">Alumni Board</a></li>
                    <li><a href="/board-news">Board News</a></li>
                    <li><a href="/elections">Elections</a></li>
                    <li class="uk-nav-divider"></li>
                    <li><a href="/class-reps">Class Reps</a></li>
                    <li class="uk-nav-divider"></li>
                    <li><a href="/alumni-profiles">Alumni Profiles</a></li>
                  </ul>
                </div>

              </li>
              <li>
                <a href="/what-we-do">What We Do</a>

                <div class="uk-background-muted uk-dropdown uk-dark" uk-dropdown="pos: bottom-justify">
                  <ul class="uk-nav uk-dropdown-nav">
                    <li><a href="/newsletter">Newsletter</a></li>
                    <li><a href="/campus-news">Campus News</a></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-bold"><a href="/homecoming">Homecoming</a></li>
                    <li><a href="/homecoming/2016">Homecoming 2016</a></li>
                    <li><a href="/homecoming/2015">Homecoming 2015</a></li>
                    <li><a href="/homecoming/2014">Homecoming 2014</a></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-bold"><a href="/alumni-projects">Alumni Projects</a></li>
                    <li><a href="/alumni-projects/alumni-consulting-initiative">Alumni Consulting Initiative</a></li>
                    <li><a href="/alumni-projects/generation-fund">Generation Fund</a></li>
                    <li><a href="/alumni-projects/alumni-scholarships">Alumni Scholarships</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/get-involved">Get Involved</a>

                <div class="uk-background-muted uk-dropdown uk-dark" uk-dropdown="pos: bottom-justify">
                  <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-text-bold"><a href="/alumni-chapters">Alumni Chapters</a></li>
                    <li><a href="/alumni-chapters/what-is-an-alumni-chapter">What is an Alumni Chapter?</a></li>
                    <li><a href="/alumni-chapters/starting-a-chapter">Starting a chapter</a></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-bold"><a href="/donate">Donate</a></li>
                    <li><a href="/alumni-office">Alumni Office</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/shop">Shop</a></li>
              <li class="uk-inline">
                <a href="#">Log in</a>

                <div class="uk-background-muted uk-dropdown" uk-dropdown="pos: bottom-justify">
                  <p>
                    Log in using your Alumni Google account
                  </p>
                  <a class="google-signin-button uk-width-1-1" href={ props.loginLink }>
                    <img class="normal" src="/media/btn_google_signin_light_normal_web@2x.png" alt="Log in with Google"/>
                    <img class="pressed" src="/media/btn_google_signin_light_pressed_web@2x.png" alt="Log in with Google"/>
                  </a>
                </div>
              </li>
            </ul>
            <div class="uk-navbar-item">
              <a href="/join" class="uk-button uk-button-primary rounded bg-transparent uk-text-primary">
                Join
              </a>
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
