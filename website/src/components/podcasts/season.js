
const c = require('csam/lib/component')

const PodcastPreviewTile = require('./podcast-preview-tile')

module.exports = function(props, children) {
  var props = props || {}
  props.podcasts = props.podcasts || []

  podcastTiles = props.podcasts.map(function(podcast) {
    return (
      <div>
        <PodcastPreviewTile podcast={ podcast } />
      </div>
    )
  })

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Alumni Blog</h1>

      <div class="uk-alert uk-alert-primary">
        <h2 class="uk-text-lead">
          The Alumni Blog Initiative
        </h2>
        <p>
          The Alumni Blog is an initiative of the Alumni Association. The blog thrives through our bloggers, all of which are alumni of Jacobs University Bremen. We hope to enrich our readers’ daily experience with valuable insights from our personal as well as professional lives, ranging from intercultural encounters to management techniques and more. We hope you can learn from us and we from you. Despite being a very young project, a great amount of readers have been attracted to our blog posts so far. We hope to continue being an enriching endeavour and welcome you to contact us via <a href="mailto:sturhan@jacobs-alumni.de">Suna Turhan</a>.
        </p>
      </div>

      <div class="uk-grid uk-margin-medium-bottom uk-child-width-1-2@m" uk-grid>
        { podcastTiles.reverse() }
      </div>
    </article>
  )
}
