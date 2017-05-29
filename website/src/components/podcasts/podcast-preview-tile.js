
const c = require('csam/lib/component')

const Link = require('../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  var postLink = '/podcast/' + props.podcast.alias

  return (
    <div class="uk-card uk-card-default">
      <div class="uk-card-media-top">
         <Link href={ postLink }>
          <img class="uk-width-1-1" src={ props.podcast.Image } alt={ props.podcast.title } />
        </Link>
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title"><Link href={ postLink }>{ props.podcast.title }</Link></h3>
        <p class="uk-article-meta">
          { props.podcast.date }
        </p>

        <p>
          { props.podcast.preview }…
        </p>
        <p>
          <Link class="uk-button uk-button-text" href={ postLink }>Read more…</Link>
        </p>
      </div>
    </div>
  )
}
