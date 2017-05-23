
const c = require('csam/lib/component')
const Input = require('./form-input-basic')

module.exports = function(props, children) {
  return Input(props.from, children)
}
