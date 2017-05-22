
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  const submitForm = function(e) {
    e.preventDefault()
    console.log(e, 'abc')
    return false
  }

  const computeFormContents = function() {
    return []
  }

  const formContents = children || computeFormContents()

  return (
    <form class={ props.class || "" } action={ props.action } method={ props.method } on={{ submit: submitForm }}>
      { formContents }
    </form>
  )
}
