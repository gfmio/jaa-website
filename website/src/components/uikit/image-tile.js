
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}
  props.src = props.src || ''

  return (
    <figure>
      <img src={ props.src } />
    </figure>
  )
}
