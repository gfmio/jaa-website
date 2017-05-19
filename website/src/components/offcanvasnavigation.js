
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <div id="off-canvas" class="uk-offcanvas" uk-offcanvas>
      <div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-push" uk-offcanvas="mode: push">

        <a class="uk-offcanvas-close" type="button" uk-close></a>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div class="uk-panel">
          <ul class="uk-nav uk-nav-default tm-nav">
            <li><a class="uk-active" href="/">Home</a></li>
            <li><a href="/who-we-are">Who We Are</a></li>
            <li><a href="/what-we-do">What We Do</a></li>
            <li><a href="/get-involved">Get Involved</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
