
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}
  props.format = props.format || 16 / 9

  return (
    <div class="embed-container" style={{ paddingBottom: String(100 / props.format) + "%" }} >
      { children }
    </div>
  )
}
