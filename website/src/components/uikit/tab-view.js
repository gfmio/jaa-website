
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}
  props.tabNavId = props.tabNavId || Math.random().toString(36).substring(2)
  props.pages = props.pages || []

  var titles = []
  var contents = []

  for (var n in props.pages) {
    titles.push(props.pages[n].title)
    contents.push(props.pages[n].content)
  }

  var selectorLiElements = titles.map(function(title) {
    return <li><a href="#">{ title }</a></li>
  })

  var contentsLiElements = contents.map(function(content) {
    return <li>{ content }</li>
  })

  return (
    <div class="uk-grid uk-grid-small" uk-grid>
      <div class="uk-width-auto@m">
        <div>
          <ul class="uk-tab uk-tab-left" uk-tab={ 'connect: #' + props.tabNavId }>
            { selectorLiElements }
          </ul>
        </div>
      </div>
      <div class="uk-width-expand@m">
        <ul id={ props.tabNavId } class="uk-switcher" uk-switcher="animation: uk-animation-fade">
          { contentsLiElements }
        </ul>
      </div>
    </div>
  )
}


