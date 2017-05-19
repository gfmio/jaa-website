
const c = require('csam/lib/component')

const ArticlePreviewTile = require('./article-preview-tile')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Alumni Blog</h1>

      <p class="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

      <div class="uk-grid uk-margin-medium-bottom uk-child-width-1-2@m" uk-grid>
        <ArticlePreviewTile />
        <ArticlePreviewTile />
        <ArticlePreviewTile />
        <ArticlePreviewTile />
        <ArticlePreviewTile />
      </div>
    </article>
  )
}
