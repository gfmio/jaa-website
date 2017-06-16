
const c = require('csam/lib/component')

const NavBar = require('./uikit/navbar')

const Link = require('./uikit/link')
// const RoundImage = require('./roundimage')

module.exports = function(props, children) {
  var props = props || {}

  props.loginLink = '//api.dev.jacobs-alumni.de/login/google'

  var toggleOffCanvas = function(e) {
    UIkit.offcanvas('#off-canvas').toggle()
  }

  // Goes after Blog
  // <li><Link href="/shop">Shop</Link></li>
  //             <li class="uk-inline">
  //               <Link href="">Log in</Link>

  //               <div class="uk-background-muted uk-dropdown" uk-dropdown="pos: bottom-justify">
  //                 <p>
  //                   Log in using your Alumni Google account
  //                 </p>
  //                 <Link class="google-signin-button uk-width-1-1" href={ props.loginLink }>
  //                   <img class="normal" src="/media/btn_google_signin_light_normal_web@2x.png" alt="Log in with Google"/>
  //                   <img class="pressed" src="/media/btn_google_signin_light_pressed_web@2x.png" alt="Log in with Google"/>
  //                 </Link>
  //               </div>
  //             </li>

  return (
    <header class="uk-sticky uk-sticky-fixed uk-width-1-1" style={{ position: 'fixed', top: '0', width: '100%' }}>
      <div class="uk-navbar-container navbar uk-dark">
        <nav class="uk-navbar">
          <div class="uk-navbar-left">
            <Link href="/" class="uk-navbar-item uk-logo">
              <span class="logo-button uk-margin-small-right">
                <img src="/media/favicon.png" />
              </span>
              <span class="uk-visible@s">Jacobs Alumni Association</span>
            </Link>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav uk-visible@l">
              <li><Link class="uk-active" href="/">Home</Link></li>
              <li class="uk-inline">
                <Link href="/who-we-are">Who We Are</Link>

                <div class="uk-background-muted uk-dropdown uk-dark" uk-dropdown="pos: bottom-justify">
                  <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-text-bold"><Link href="/alumni-association">Alumni Association</Link></li>
                    <li><Link href="/charter">Alumni Charter</Link></li>
                    <li><Link href="/by-laws">Contributions By-laws</Link></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-bold"><Link href="/alumni-board">Alumni Board</Link></li>
                    <li><Link href="/board-news">Board News</Link></li>
                    <li><Link href="/elections">Elections</Link></li>
                    <li class="uk-nav-divider"></li>
                    <li><Link href="/class-reps">Class Reps</Link></li>
                    <li class="uk-nav-divider"></li>
                    <li><Link href="/alumni-profiles">Alumni Profiles</Link></li>
                  </ul>
                </div>

              </li>
              <li>
                <Link href="/what-we-do">What We Do</Link>

                <div class="uk-background-muted uk-dropdown uk-dark" uk-dropdown="pos: bottom-justify">
                  <ul class="uk-nav uk-dropdown-nav">
                    <li><Link href="/newsletter">Newsletter</Link></li>
                    <li><Link href="/campus-news">Campus News</Link></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-bold"><Link href="/homecoming">Homecoming</Link></li>
                    <li>
                      <Link href="/homecoming/2017">Homecoming 2017</Link>
                    </li>
                    <li>
                      <Link href="/homecoming/2016">Homecoming 2016</Link>
                      <ul class="uk-nav-sub">
                        <li><Link href="/homecoming/2016/general-assembly">General Assembly</Link></li>
                        <li><Link href="/homecoming/2016/jacobs-gives">#JacobsGives</Link></li>
                        <li><Link href="/homecoming/2016/picture-gallery">Picture Gallery</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/homecoming/2015">Homecoming 2015</Link>
                      <ul class="uk-nav-sub">
                        <li><Link href="/homecoming/2015/general-assembly">General Assembly</Link></li>
                        <li><Link href="/homecoming/2015/picture-gallery">Picture Gallery</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/homecoming/2014">Homecoming 2014</Link>
                      <ul class="uk-nav-sub">
                        <li><Link href="/homecoming/2014/general-assembly">General Assembly</Link></li>
                      </ul>
                    </li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-bold"><Link href="/alumni-projects">Alumni Projects</Link></li>
                    <li><Link href="/alumni-projects/alumni-consulting-initiative">Alumni Consulting Initiative</Link></li>
                    <li><Link href="/alumni-projects/generation-fund">Generation Fund</Link></li>
                    <li><Link href="/alumni-projects/alumni-scholarships">Alumni Scholarships</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/get-involved">Get Involved</Link>

                <div class="uk-background-muted uk-dropdown uk-dark" uk-dropdown="pos: bottom-justify">
                  <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-text-bold"><Link href="/alumni-chapters">Alumni Chapters</Link></li>
                    <li><Link href="/alumni-chapters/what-is-an-alumni-chapter">What is an Alumni Chapter?</Link></li>
                    <li><Link href="/alumni-chapters/starting-a-chapter">Starting a chapter</Link></li>
                    <li><Link href="/alumni-chapters/faq">FAQs</Link></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-bold"><Link href="/donate">Donate</Link></li>
                    <li><Link href="/alumni-office">Alumni Office</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
            <div class="uk-navbar-item">
              <Link href="/join" class="uk-button uk-button-primary rounded bg-transparent uk-text-primary">
                Join
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
