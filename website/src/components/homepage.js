
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article uk-text-center">
      <h1 class="uk-article-title">Welcome!</h1>

      <figure>
        <img src="media/logo.jpg" />
      </figure>

      <p class="uk-text-lead">
        Welcome to mindset 101
      </p>
    </article>
  )
}
