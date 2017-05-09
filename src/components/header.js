
const c = require('csam/lib/component')

const RoundImage = require('./roundimage')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <header class="header">
      <div class="col2">
        <div class="title">
          <h1><a href="/">
            <div class="logo-container">
              <RoundImage src="media/favicon.png" alt="Logo" class="logo mr1" />
            </div>
            <div class="text" >
              Jacobs Alumni Association
            </div>
          </a></h1>
        </div>
        <nav class="nav">
          <a href="/">Link1</a>
          <a href="/">Link2</a>
          <a href="/">Link3</a>
          <a href="/">
            <div>
              <RoundImage src="media/favicon.png" alt="Profile" class="profile ml1" />
            </div>
          </a>
        </nav>
      </div>
    </header>
  )
}
