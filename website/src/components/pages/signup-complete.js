
const c = require('csam/lib/component')

const form = require('../uikit/form')



module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Welcome to the Jacobs Alumni Association!</h1>

      <p class="uk-text-lead">
        You're our latest member!
      </p>
    </article>
  )
}
