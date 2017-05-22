
const c = require('csam/lib/component')
const Input = require('./form-input-basic')

module.exports = function(props, children) {
  return Input(props.from, children)
  // return (
  //   <Input
  //     name={ props.from.name }
  //     type={ props.from.type }
  //     label={ props.from.label }
  //     placeholder={ props.from.placeholder }
  //     validation={ props.from.validation }
  //     value={ props.from.value }
  //     options={ props.from.options } />
  // )
}
