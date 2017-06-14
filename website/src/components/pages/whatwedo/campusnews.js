
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
      <h1 class="uk-article-title">Campus News</h1>
      <p class="uk-text-lead">
        Part of the mission of the Alumni Board is keeping the bonds between the University and Alumni Community strong. Here you can find the most recent news from Jacobs University, such as Leadership Letters and various events hosted on campus.
      </p>

      <div class="uk-grid uk-margin-medium-bottom uk-child-width-1-2@m" uk-grid>
        { articleTiles.reverse() }
      </div>
    </article>
  )
}
