
const c = require('csam/lib/component')
const EmbedIFrame = require('../../../uikit/embed-iframe')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Alumni Newsletter October 2016</h1>

      <p>
        In case you can’t see the embedded PDF, you can open it by clicking <a href="/media/newsletters/2016-10/Newsletter-October-2016.pdf">this link</a>.
      </p>
      <EmbedIFrame format={ 0.777 } src="/media/newsletters/2016-10/Newsletter-October-2016.pdf" />

    </article>
  )
}
