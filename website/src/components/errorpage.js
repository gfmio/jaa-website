
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="p1">
      <div class="col2">
        <center>
          <h1>Error { props.errorCode }</h1>
          <p>
            The page you requested could not be found.
          </p>
          <p>
            <a href="/">Home</a>
          </p>
        </center>
      </div>
    </article>
  )
}
