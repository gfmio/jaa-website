
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  var postLink = '/blog/' + props.article.alias

  return (
    <div class="uk-card uk-card-default">
      <div class="uk-card-media-top">
         <a href={ postLink }>
          <img class="uk-width-1-1" src={ props.article.titleImage } alt={ props.article.title } />
        </a>
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title"><a href={ postLink }>{ props.article.title }</a></h3>
        <p class="uk-article-meta">
          By { props.article.author } | { props.article.date }
        </p>

        <p>
          { props.article.preview }...
        </p>
        <p>
          <a class="uk-button uk-button-text" href={ postLink }>Read more...</a>
        </p>
      </div>
    </div>
  )
}
