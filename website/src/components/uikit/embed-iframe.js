
const c = require('csam/lib/component')
const Embed = require('./embed')
const Link = require('./link')

module.exports = function(props, children) {
  var props = props || {}
  props.format = props.format || 16 / 9

  return (
    <Embed format={ props.format } >
      <iframe src={ props.src } frameborder="0" allowfullscreen="allowfullscreen">
      </iframe>
    </Embed>
  )
}
