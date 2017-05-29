
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">
        { props.podcast.title }
      </h1>
      <p class="uk-article-meta">
        { props.podcast.date }
      </p>

      <figure class="uk-width-1-1">
        <img class="uk-width-1-1" src={ props.podcast.Image } alt={ props.podcast.title } />
      </figure>

      { props.podcast.content }
    </article>
  )
}
