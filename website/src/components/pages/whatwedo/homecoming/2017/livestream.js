
const c = require('csam/lib/component')

const Link = require('../../../../uikit/link')
const EmbedIFrame = require('../../../../uikit/embed-iframe')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Homecoming 2017 - General Assembly - Live stream</h1>

      <EmbedIFrame src="https://livestream.com/accounts/7600301/events/7732409/player?width=640&height=360&enableInfoAndActivity=true&defaultDrawer=&autoPlay=true&mute=false"/>
      <p>
        If the embedded live stream does not work for you, please go to <Link href="https://livestream.com/accounts/7600301/events/7732409">https://livestream.com/accounts/7600301/events/7732409</Link>.
      </p>
    </article>
  );
}


