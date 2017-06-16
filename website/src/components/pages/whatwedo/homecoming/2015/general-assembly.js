
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">General Assembly at Homecoming 2015</h1>
      <p>
        <strong>Date & time:</strong> Saturday 26th September 2015 – 10:45 – 12:45<br/>
        <strong>Location:</strong> Conrad Naber Lecture Hall, Reimer Lust Hall, Jacobs University Campus
      </p>

      <h2>Agenda</h2>
      <ul>
        <li>Annual and financial report from the Alumni Board</li>
        <li>Alumni Board Elections</li>
        <li>Alumni Association Contributions By-Laws</li>
        <li>Update from the Jacobs University Leadership</li>
        <li>Alumni Association Internet Resources</li>
        <li>Generation Fund</li>
      </ul>

      <p>
        Please note the General Assembly will be <strong>live-streamed, recorded</strong>&nbsp;and made available to the members of the Alumni Association who log in to AlmaLink. If you attend the assembly, you agree that you and/or your statements could be recorded. Watch the GA here:
      </p>
      <p>
        <a href="http://livestream.com/accounts/7600301/events/4365217">http://livestream.com/accounts/7600301/events/4365217</a>
      </p>
    </article>
  )
}


