
const c = require('csam/lib/component')

const Link = require('./uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <div class="uk-text-center">
        <h1 class="uk-article-title">Error { props.errorCode }</h1>
        <p class="uk-text-lead">
          The page you requested could not be found.
        </p>
        <p class="uk-text-lead">
          <Link href="/">Home</Link>
        </p>
      </div>
    </article>
  )
}
