
const c = require('csam/lib/component')

const NavBar = require('./uikit/navbar')

const RoundImage = require('./roundimage')

module.exports = function(props, children) {
  var props = props || {}

  var toggleOffCanvas = function(e) {
    UIkit.offcanvas('#off-canvas').toggle();
  }


  return (
    <div class="uk-sticky uk-sticky-fixed uk-active text-white uk-background-primary">
      <nav class="uk-navbar">
        <div class="uk-navbar-left">
          <a href="/" class="uk-navbar-item uk-logo">
            <span class="uk-icon-button logo-button uk-margin-small-right" uk-icon="">
              <img style="margin: -0.5rem;" src="/media/favicon.png" />
            </span>
            <span class="uk-visible@s">Jacobs Alumni Association</span>
          </a>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav tm-nav uk-visible@l">
            <li><a class="uk-active" href="/">Home</a></li>
            <li class="uk-inline">
              <a href="/who-we-are">Who We Are</a>

              <div class="uk-background-muted text-dark uk-dropdown" uk-dropdown="pos: bottom-justify">
                <ul class="uk-nav uk-dropdown-nav">
                  <li class="uk-active"><a href="#">Active</a></li>
                  <li><a href="#">Item</a></li>
                  <li class="uk-nav-header">Header</li>
                  <li><a href="#">Item</a></li>
                  <li><a href="#">Item</a></li>
                  <li class="uk-nav-divider"></li>
                  <li><a href="#">Item</a></li>
                </ul>
              </div>

            </li>
            <li><a href="/what-we-do">What We Do</a></li>
            <li><a href="/get-involved">Get Involved</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/shop">Shop</a></li>
            <li class="uk-inline">
              <a href="#">Log in</a>

              <div class="uk-background-muted text-dark uk-dropdown" uk-dropdown="pos: bottom-justify">
                <p>
                  Log in using your Alumni Google account
                </p>
                <button class="google-signin-button uk-width-1-1">
                  <img class="normal" src="/media/btn_google_signin_light_normal_web@2x.png" alt="Log in with Google"/>
                  <img class="pressed" src="/media/btn_google_signin_light_pressed_web@2x.png" alt="Log in with Google"/>
                </button>
              </div>
            </li>
          </ul>
          <div class="uk-navbar-item">
            <a href="/join" class="uk-button uk-button-default tm-button-default uk-icon rounded bg-transparent">
              Join
            </a>
          </div>
          <a href="#" class="uk-navbar-toggle uk-navbar-toggle-icon uk-icon uk-hidden@l" on={{ click: toggleOffCanvas }}>
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

    // <a href="#off-canvas" uk-toggle class="uk-navbar-toggle uk-navbar-toggle-icon uk-icon uk-hidden@l">


    // <header class="header">
    //   <div class="col2">
    //     <div class="title">
    //       <h1><a href="/">
    //         <div class="logo-container">
    //           <RoundImage src="media/favicon.png" alt="Logo" class="logo mr1" />
    //         </div>
    //         <div class="text" >
    //           Jacobs Alumni Association
    //         </div>
    //       </a></h1>
    //     </div>
    //     <nav class="nav">
    //       <a href="/">Link1</a>
    //       <a href="/">Link2</a>
    //       <a href="/">Link3</a>
    //       <a href="/">
    //         <div>
    //           <RoundImage src="media/favicon.png" alt="Profile" class="profile ml1" />
    //         </div>
    //       </a>
    //     </nav>
    //   </div>
    // </header>
  )
}
