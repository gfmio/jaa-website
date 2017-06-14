
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Alumni Newsletter October 2016</h1>

      <figure>
        <a href="http://jacobs-alumni.de/wp-content/uploads/2016/10/Newsletter-October-2016.pdf" target="_blank">
          <img src="http://jacobs-alumni.de/wp-content/uploads/2016/10/Newsletter-October-2016.png" alt="Newsletter 2016" />
        </a>
      </figure>
    </article>
  )
}
