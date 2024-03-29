
const c = require('csam/lib/component')

const Link = require('./uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  props.loginLink = ''

  // Goes after Home
  // <li>
  //             <Link href={ props.loginLink }>
  //               Log in
  //             </Link>
  //           </li>
  //           <li>
  //             <Link class="uk-text-bold uk-text-primary" href="/join">
  //               Join
  //             </Link>
  //           </li>
  //           <li><Link href="/shop">Shop</Link></li>

  return (
    <div id="off-canvas" uk-offcanvas="mode: push; overlay: true">
      <div class="uk-offcanvas-bar uk-dark uk-background-muted">

        <a class="uk-offcanvas-close" type="button" uk-close></a>

        <div class="uk-panel">
          <h3>
            Jacobs Alumni Association
          </h3>
          <ul class="uk-nav uk-nav-primary">
            <li><Link class="uk-active" href="/">Home</Link></li>

            <li>
              <Link href="/who-we-are">Who We Are</Link>

              <ul class="uk-nav-sub">
                <li><Link href="/alumni-association">Alumni Association</Link>
                  <ul class="uk-nav-sub">
                    <li><Link href="/charter">Alumni Charter</Link></li>
                    <li><Link href="/by-laws">Contributions By-laws</Link></li>
                  </ul>
                </li>
                <li><Link href="/alumni-board">Alumni Board</Link>
                  <ul class="uk-nav-sub">
                    <li><Link href="/board-news">Board News</Link></li>
                    <li><Link href="/elections">Elections</Link></li>
                  </ul>
                </li>
                <li><Link href="/class-reps">Class Reps</Link></li>
                <li><Link href="/alumni-profiles">Alumni Profiles</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/what-we-do">What We Do</Link>

              <ul class="uk-nav-sub">
                <li><Link href="/newsletter">Newsletter</Link></li>
                <li><Link href="/campus-news">Campus News</Link></li>
                <li><Link href="/homecoming">Homecoming</Link>
                  <ul class="uk-nav-sub">
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
                  </ul>
                </li>
                <li><Link href="/alumni-projects">Alumni Projects</Link>
                  <ul class="uk-nav-sub">
                    <li><Link href="/alumni-projects/alumni-consulting-initiative">Alumni Consulting Initiative</Link></li>
                    <li><Link href="/alumni-projects/generation-fund">Generation Fund</Link></li>
                    <li><Link href="/alumni-projects/alumni-scholarships">Alumni Scholarships</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/get-involved">Get Involved</Link>

              <ul class="uk-nav-sub">
                <li><Link href="/alumni-chapters">Alumni Chapters</Link>
                  <ul class="uk-nav-sub">
                    <li><Link href="/alumni-chapters/what-is-an-alumni-chapter">What is an Alumni Chapter?</Link></li>
                    <li><Link href="/alumni-chapters/starting-a-chapter">Starting a chapter</Link></li>
                    <li><Link href="/alumni-chapters/faq">FAQs</Link></li>
                  </ul>
                </li>
                <li><Link href="/donate">Donate</Link></li>
                <li><Link href="/alumni-office">Alumni Office</Link></li>
              </ul>
            </li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
