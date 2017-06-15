
const c = require('csam/lib/component')

const defaultInputWrapper = function(props, children) {
  return (
    <div class="uk-grid uk-grid-small">
      <div class="uk-width-1-5@s">
        <label class="uk-form-label" for={ props.name }>{ props.label }</label>
      </div>
      <div class="uk-width-1-3@s">
        { props.inputElement }
      </div>
      <div class="uk-width-1-3@s">
        <ul class="nolisticon uk-padding-remove">
          { props.alerts }
        </ul>
      </div>
    </div>
  )
}

const radioCheckboxInputWrapper = function(props, children) {
  return (
    <div class="uk-grid uk-grid-small">
      <div class="uk-width-1-4@s">
        <label class="uk-form-label" for={ props.name }>
          { props.inputElement } { props.label }
        </label>
      </div>
      <div class="uk-width-3-4@s">
        <ul class="nolisticon uk-padding-remove">
          { props.alerts }
        </ul>
      </div>
    </div>
  )
}

module.exports = function(props, children) {
  var props = props || {}
  props.name = props.name || ''
  props.type = props.type || 'text'
  props.label = props.label || props.placeholder || ''
  props.placeholder = props.placeholder || props.label || ''
  // props.value = props.value || undefined
  props.value = props.value || ''
  props.validation = props.validation || {
    state: 'warning',
    alerts: [
      { type: 'note', message: 'Comment' },
      { type: 'warning', message: 'Warning' },
      { type: 'danger', message: 'My super long message.' },
    ]
  }

  //
  // Helper functions
  //

  const checkValidity = function(value, checks) {
    return {
      state: 'valid',
      alerts: [
        { type: 'warning', message: 'ABC' }
      ]
    }
  }

  const onChangeHandler = function(e) {
    e.preventDefault()

    const validation = checkValidity(e.target.value, [])

    console.log(props.name, e.target.value)

    console.log(validation)

    return false
  }


  //
  // Alerts
  //

  const alerts = props.validation.alerts.map(function(alert) {
    var cls = ''

    switch (alert.type) {
      case 'warning':
        cls = 'uk-text-warning'
        break
      case 'danger':
        cls = 'uk-text-danger'
        break
      case 'success':
        cls = 'uk-text-success'
        break
      default:
        cls = 'uk-text-muted'
        break
    }

    return (
      <li class={ cls }>
        { alert.message }
      </li>
    )
  })

  //
  // Validation input class
  //

  var formElementClasses = [] // ['uk-form-blank']
  switch (props.validation.state) {
    case 'valid':
      formElementClasses.push('uk-form-success')
      break
    case 'invalid':
      formElementClasses.push('uk-form-danger')
      break
    case 'warning':
      formElementClasses.push('uk-form-warning')
      break
  }

  //
  // Compute the correct input element
  //

  var type = 'text'
  var inputElement = undefined
  var inputWrapper = defaultInputWrapper
  switch (props.type) {
    case 'checkbox':
      type = 'checkbox'
      formElementClasses.push('uk-checkbox')
      inputWrapper = radioCheckboxInputWrapper
      inputElement = (
        <input class={ formElementClasses.join(' ') } type={ type } name={ props.name } placeholder={ props.placeholder } value={ props.value } on={{ change: onChangeHandler }} />
      )
      break
    case 'radio':
      type = 'radio'
      formElementClasses.push('uk-radio')
      inputWrapper = radioCheckboxInputWrapper
      inputElement = (
        <input class={ formElementClasses.join(' ') } type={ type } name={ props.name } placeholder={ props.placeholder } value={ props.value } on={{ change: onChangeHandler }} />
      )
      break
    case 'longText':
      formElementClasses.push('uk-textarea')
      inputElement = (
        <textarea class={ formElementClasses.join(' ') } name={ props.name } placeholder={ props.placeholder } on={{ change: onChangeHandler }}>
          { props.value }
        </textarea>
      )
      break
    case 'radioGroup':
      formElementClasses.push('uk-radio')
      type = 'radio'
      options = []

      for (var key in props.options) {
        // checked={ props.value == key ? true : false }
        options.push(<li>
          <input class={ formElementClasses.join(' ') } type={ type } name={ props.name } placeholder={ props.placeholder } value={ key } on={{ click: onChangeHandler }} /> { props.options[key] }
        </li>)
      }

      inputElement = (
        <ul class="nolisticon uk-padding-remove">
          { options }
        </ul>
      )
      break
    case 'select':
      formElementClasses.push('uk-select')
      var multiple = props.multiple || false
      options = []

      for (var key in props.options) {
        options.push(
          <option value={ key }> { props.options[key] }</option>
        )
      }

      inputElement = (
        <select class={ formElementClasses.join(' ') } name={ props.name } placeholder={ props.placeholder } multiple={ multiple } on={{ change: onChangeHandler }}>
          { options }
        </select>
      )
      break
    default:
      type = props.type
      formElementClasses.push('uk-input')

      inputElement = (
        <input class={ formElementClasses.join(' ') } type={ type } name={ props.name } placeholder={ props.placeholder } value={ props.value } on={{ change: onChangeHandler }} />
      )
      break
  }

  //
  // Return the result
  //

  return inputWrapper({ name: props.name, label: props.label, inputElement: inputElement, alerts: alerts })
}
