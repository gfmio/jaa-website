
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">
        { props.article.title }
      </h1>
      <p class="uk-article-meta">
        By { props.article.author } | { props.article.date }
      </p>

      { props.article.titleImage != undefined ? <figure class="uk-width-1-1">
        <img class="uk-width-1-1" src={ props.article.titleImage } alt={ props.article.title } />
      </figure> : '' }

      { props.article.content }
    </article>
  )
}
