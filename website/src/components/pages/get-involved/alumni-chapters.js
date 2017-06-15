
const c = require('csam/lib/component')
const EmbedIFrame = require('../../uikit/embed-iframe')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Alumni Chapters</h1>

      <div class="uk-width-xlarge">
        <EmbedIFrame src="https://www.youtube.com/embed/yDAXfMEBrnI?enablejsapi=1" />
      </div>

      <p>Alumni chapters are groups of alumni who share a common ground and come together to foster the Jacobs network. As such chapters form the hubs of the alumni network, where alumni not only stay in touch but also forge new connections. They are about keeping the spirit of our university alive by supporting each other a life long wherever we are on the globe. In this manner they also spread the name of our university all over the world. The common goals of all alumni chapters are the following.</p>
      <ul>
        <li>Build and reinforce a network among alumni based on opportunities for growth, exchange and support on a personal, professional and social level.</li>
        <li>Help in promoting the unique character of the university and ensure a continuous commitment of alumni to the university and its long-term advancement, through support for current students and other activities.</li>
      </ul>
    </article>
  )
}
