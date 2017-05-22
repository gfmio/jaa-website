
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  props.loginLink = ''

  return (
    <div id="off-canvas" class="uk-offcanvas" uk-offcanvas>
      <div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-push" uk-offcanvas="mode: push">

        <a class="uk-offcanvas-close" type="button" uk-close></a>

        <div class="uk-panel">
          <ul class="uk-nav uk-nav-primary">
            <li><a class="uk-active" href="/">Home</a></li>
            <li>
              <a class="google-signin-button" href={ props.loginLink }>
                Log in
              </a>
            </li>
            <li>
              <a class="uk-text-bold uk-text-primary" href="/join">
                Join
              </a>
            </li>
            <li><a href="/shop">Shop</a></li>
            <li>
              <a href="/who-we-are">Who We Are</a>

              <ul class="uk-nav-sub">
                <li><a href="/alumni-association">Alumni Association</a>
                  <ul class="uk-nav-sub">
                    <li><a href="/alumni-charter">Alumni Charter</a></li>
                    <li><a href="/contributions-by-laws">Contributions By-laws</a></li>
                  </ul>
                </li>
                <li><a href="/alumni-board">Alumni Board</a>
                  <ul class="uk-nav-sub">
                    <li><a href="/board-news">Board News</a></li>
                    <li><a href="/elections">Elections</a></li>
                  </ul>
                </li>
                <li><a href="/class-reps">Class Reps</a></li>
                <li><a href="/alumni-profiles">Alumni Profiles</a></li>
              </ul>
            </li>
            <li>
              <a href="/what-we-do">What We Do</a>

              <ul class="uk-nav-sub">
                <li><a href="/newsletter">Newsletter</a></li>
                <li><a href="/campus-news">Campus News</a></li>
                <li><a href="/homecoming">Homecoming</a>
                  <ul class="uk-nav-sub">
                    <li><a href="/homecoming/2016">Homecoming 2016</a></li>
                    <li><a href="/homecoming/2015">Homecoming 2015</a></li>
                    <li><a href="/homecoming/2014">Homecoming 2014</a></li>
                  </ul>
                </li>
                <li><a href="/alumni-board">Alumni Projects</a>
                  <ul class="uk-nav-sub">
                    <li><a href="/board-news">Alumni Consulting Initiative</a></li>
                    <li><a href="/elections">Generation Fund</a></li>
                    <li><a href="/class-reps">Alumni Scholarships</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/get-involved">Get Involved</a>

              <ul class="uk-nav-sub">
                <li><a href="/alumni-chapters">Alumni Chapters</a>
                  <ul class="uk-nav-sub">
                    <li><a href="/alumni-chapters/what-is-an-alumni-chapter">What is an Alumni Chapter?</a></li>
                    <li><a href="/alumni-chapters/starting-a-chapter">Starting a chapter</a></li>
                  </ul>
                </li>
                <li><a href="/donate">Donate</a></li>
                <li><a href="/alumni-office">Alumni Office</a></li>
              </ul>
            </li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
