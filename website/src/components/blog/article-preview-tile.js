
const c = require('csam/lib/component')

const Link = require('../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  var postLink = props.article.alias

  return (
    <div class="uk-card uk-card-default">
      { props.article.titleImage != undefined ? <div class="uk-card-media-top">
         <Link href={ postLink }>
          <img class="uk-width-1-1" src={ props.article.titleImage } alt={ props.article.title } />
        </Link>
      </div> : '' }
      <div class="uk-card-body">
        <h3 class="uk-card-title"><Link href={ postLink }>{ props.article.title }</Link></h3>
        <p class="uk-article-meta">
          By { props.article.author } | { props.article.date }
        </p>

        <p>
          { props.article.preview } <Link class="uk-button uk-button-text" href={ postLink }>[…]</Link>
        </p>
        <p>
          <Link class="uk-button uk-button-text" href={ postLink }>Read more…</Link>
        </p>
      </div>
    </div>
  )
}
