
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return <div class={"round " + props.class }>
    <img src={ props.src } alt={ props.alt } />
  </div>
}
