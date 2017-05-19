
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article uk-text-center">
      <h1 class="uk-article-title">Welcome!</h1>

      <figure class="p2">
        <img src="media/logo.jpg" />
      </figure>

      <p class="uk-text-lead">
        We are the Alumni Association of Jacobs University Bremen!
      </p>
    </article>
  )
}
