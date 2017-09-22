
const c = require('csam/lib/component')
const Link = require('./uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article uk-text-center">
      <div class="homecoming-2017">
        <Link href="/homecoming/2017" style={{ textDecoration: "none" }}>
          <h1 class="article-title text-center">
            See you at Homecoming 2017 (22 – 24 Sep 2017)!
          </h1>
          <h2>The ticket sale is now closed.</h2>
          <figure>
            <img src="/media/what-we-do/homecoming/2017/banner.jpg" alt="Homecoming 2017 banner" />
          </figure>
        </Link>
      </div>

      <figure>
        <img src="/media/logo.jpg" />
      </figure>
    </article>
  )
}
