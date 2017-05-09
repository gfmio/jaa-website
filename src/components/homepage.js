
const c = require('csam/lib/component')

const RoundImage = require('./roundimage')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="p1 bgdark">
      <h1>Hello World!</h1>

      <RoundImage src="media/favicon.png" alt="Logo" class="logo m1" />
      <RoundImage src="media/favicon.png" alt="Logo" class="logo m1" />
      <RoundImage src="media/favicon.png" alt="Logo" class="logo m1" />
      <RoundImage src="media/favicon.png" alt="Logo" class="logo m1" />
      <RoundImage src="media/favicon.png" alt="Logo" class="logo m1" />
    </article>
  )
}
