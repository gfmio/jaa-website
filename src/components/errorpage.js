
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return <h1>Error { props.errorCode }</h1>
}
