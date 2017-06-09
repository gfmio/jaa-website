
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Homecoming</h1>
      <p class="uk-text-lead">
        The Alumni Association was founded in June 2004 by the first Jacobs University graduating class.
      </p>
    </article>
  )
}
