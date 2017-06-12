
const c = require('csam/lib/component')
const EmbedIFrame = require('../../uikit/embed-iframe')
module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Jacobs Alumni Association General Assembly at Homecoming 2014</h1>
      <p>
        The last Alumni Association General Assembly took place on 20th September 2014, in Conrad Naber Hall, Jacobs University campus. 63 Alumni were present. The minutes of the GA are available <a href="/sites/default/files/newsletter/nov14/JacobsAlumniAssociationGASept2014.pdf">here</a> in PDF form. Please check out the video below:
      </p>
      <EmbedIFrame src="//www.youtube.com/embed/X2k5ymtT1bU" />
    </article>
  )
}
