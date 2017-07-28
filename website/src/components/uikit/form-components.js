
const c = require('csam/lib/component');

const InputWrapper = function(props, children) {
  props = props || {};
  props.alerts = props.alerts || [];
  props.name = props.name || "";
  props.label = props.label || "";
  return (
    <div class="uk-grid uk-grid-small">
      <div class="uk-width-1-5@s">
        <label class="uk-form-label" for={ props.name }>{ props.label }</label>
      </div>
      <div class="uk-form-controls uk-width-1-3@s">
        { children }
      </div>
      <div class="uk-width-1-3@s">
        <ul class="nolisticon uk-padding-remove">
          { props.alerts.map(function(e){ return <li>{ e }</li>; }) }
        </ul>
      </div>
    </div>
  )
}

const CheckBoxWrapper = function(props, children) {
  return (
    <div class="uk-grid uk-grid-small">
      <div class="uk-width-1-5@s">
        <label class="uk-form-label" for={ props.name }>
          { children }{" "}{ props.label }
        </label>
      </div>
      <div class="uk-width-4-5@s">
        <ul class="nolisticon uk-padding-remove">
          { props.alerts.map(function(e){ return <li>{ e }</li>; }) }
        </ul>
      </div>
    </div>
  )
}

const Input = function(props, children) {
  props = props || {};
  props.type = props.type || "text";
  props.on = props.on || {};
  props.alerts = props.alerts || [];
  props.placeholder = props.placeholder || "";
  props.value = props.value || "";
  props.required = props.required || true;
  props.state = props.state;

  return (
    <InputWrapper name={ props.name } label={ props.label } alerts={ props.alerts }>
      <input
        class="uk-input"
        type={ props.type }
        name={ props.name }
        on={ props.on }
        placeholder={ props.placeholder }
        value={ props.value }
        required={ props.required } />
    </InputWrapper>
  );
}

const Textarea = function(props, children) {
  props = props || {};
  props.on = props.on || {};
  props.alerts = props.alerts || [];
  props.placeholder = props.placeholder || "";
  props.value = props.value || "";
  props.required = props.required || true;

  return (
    <InputWrapper name={ props.name } label={ props.label } alerts={ props.alerts }>
      <textarea
        class="uk-input"
        name={ props.name }
        on={ props.on }
        placeholder={ props.placeholder }
        required={ props.required }>
        { props.value }
      </textarea>
    </InputWrapper>
  );
}

const RadioGroup = function(props, children) {
  props = props || {};
  props.on = props.on || {};
  props.alerts = props.alerts || [];
  props.required = props.required || true;
  props.options = props.options || [];

  children = [];

  for (var key in props.options) {
    children.push(
      <div><input
      class="uk-radio"
      type="radio"
      name={ props.name }
      value={ key }
      on={ props.on }
      required={ props.required } /> { props.options[key] }</div>
    )
  }

  return (
    <InputWrapper name={ props.name } label={ props.label } alerts={ props.alerts }>
      { children }
    </InputWrapper>
  );
}

const Select = function(props, children) {
  props = props || {};
  props.on = props.on || {};
  props.alerts = props.alerts || [];
  props.required = props.required || true;
  props.options = props.options || [];

  children = [];

  for (var key in props.options) {
    children.push(
      <option value={ key }> { props.options[key] }</option>
    )
  }

  return (
    <InputWrapper name={ props.name } label={ props.label } alerts={ props.alerts }>
      <select class="uk-select" name={ props.name } multiple={ props.multiple } required={ props.required } on={ props.on }>
        { children }
      </select>
    </InputWrapper>
  );
}

const CheckBox = function(props, children) {
  props = props || {};
  props.on = props.on || {};
  props.alerts = props.alerts || [];
  props.required = props.required || true;

  return (
    <CheckBoxWrapper name={ props.name } label={ props.label } alerts={ props.alerts }>
      <input
        class="uk-checkbox"
        type="checkbox"
        name={ props.name }
        on={ props.on }
        required={ props.required } />
    </CheckBoxWrapper>
  );
}

module.exports = {
  InputWrapper: InputWrapper,
  CheckBoxWrapper: CheckBoxWrapper,
  Input: Input,
  Textarea: Textarea,
  RadioGroup: RadioGroup,
  Select: Select,
  CheckBox: CheckBox,
}
