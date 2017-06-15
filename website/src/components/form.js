
const c = require('csam/lib/component')

const Link = require('./uikit/link')

const MyForm = function(props, children) {
  var props = props || {}
  props.id = props.id || undefined

  const model = {
    id: props.id,
    fields: {
      myfield: {
        name: 'myfield',
        value: undefined,
        state: 'valid',
        errors: [],
        validators: [
          function(value) { if (value.length == 0) { return ['Error: length == 0'] } }
        ]
      },
      myfield2: {
      }
    },
    actions: {
      submit: function(model) {
        return function(e) {
          e.preventDefault()
          console.log(model)
          console.log(e)
          return false
        }
      }
    }
  }

  const changeHandler = function(field) {
    return function(e) {
      var v = e.target.value
      var validationErrors = []

      for (var n in field.validators) {
        var validator = field.validators[n]
        var errs = validator(v)
        if (errs != undefined) {
          validationErrors = validationErrors.concat(errs)
        }
      }

      if (v == undefined) {
        field.state = 'empty'
        field.errors = validationErrors
        field.value = undefined
      } else if (validationErrors.length == 0) {
        field.state = 'valid'
        field.errors = validationErrors
        field.value =  v
      } else {
        field.state = 'invalid'
        field.errors = validationErrors
        field.value =  v
      }

      // console.log(field)
      console.log(model)
    }
  }


  const changeHandler2 = function(field) {
    return function(e) {
      console.log(e.target.value)
    }
  }

  return (
    <div>
      <form>
        <div>
          <input type="text" name="myfield" on={{ change: changeHandler(model.fields.myfield) }} />
        </div>
        <div>
          <input type="radio" value="1" name="myfield2" on={{ change: changeHandler2(model.fields.myfield2) }} /> 1
          <input type="radio" value="2" name="myfield2" on={{ change: changeHandler2(model.fields.myfield2) }} /> 2
          <input type="radio" value="3" name="myfield2" on={{ change: changeHandler2(model.fields.myfield2) }} /> 3
          <input type="radio" value="4" name="myfield2" on={{ change: changeHandler2(model.fields.myfield2) }} /> 4
        </div>
        <div>
          <button type="button" name="submit" on={{ click: model.actions.submit(model) }}>Submit</button>
        </div>
      </form>
    </div>
  )
}

module.exports = function(props, value) {
  return (
    <div>
      <MyForm id={ 1 } />
      <MyForm id={ 2 } />
    </div>
  )
}
