
const c = require('csam/lib/component')
const transitionTo = require('../../actions').transitionTo

const doNothing = function(e) {
  e.preventDefault()
  UIkit.offcanvas('#off-canvas').hide()
  return false
}

const transitionHandler = function(href) {
  return function(e) {
    e.preventDefault()
    UIkit.offcanvas('#off-canvas').hide()
    transitionTo(href)
    return false
  }
}

module.exports = function(props, children) {
  props.href = props.href || undefined

  // console.log(props)

  if (props.href === undefined) {
    return c('a', Object.assign({}, { on: { click: doNothing } }, props), children)
  } else if (props.href.indexOf('//') === -1) {
    return c('a', Object.assign({}, { on: { click: transitionHandler(props.href) } }, props), children)
  } else {
    return c('a', Object.assign({}, props), children)
  }
}
