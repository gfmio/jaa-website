
const c = require('csam/lib/component')

const ArticlePreviewTile = require('../../blog/article-preview-tile')

module.exports = function(props, children) {
  var props = props || {}
  props.articles = props.articles || []

  articleTiles = props.articles.map(function(article) {
    return (
      <div>
        <ArticlePreviewTile article={ article } />
      </div>
    )
  })

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Board News</h1>

      <div class="uk-grid uk-margin-medium-bottom uk-child-width-1-2@m" uk-grid>
        { articleTiles.reverse() }
      </div>
    </article>
  )
}
