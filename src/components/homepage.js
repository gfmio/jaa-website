
const c = require('csam/lib/component')

const RoundImage = require('./roundimage')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="p1 bgblue">
      <div class="col2">
        <center>
          <h1>Welcome!</h1>

          <div class="col1">
            <figure class="p2">
              <img src="media/logo.jpg" />
            </figure>
          </div>

          <p>
            We are the Alumni Association of Jacobs University Bremen!
          </p>
        </center>
      </div>
    </article>
  )
}
