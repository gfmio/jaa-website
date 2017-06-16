
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">General Assembly at Homecoming 2016</h1>
      <p>
        <strong>Date & time:</strong> Saturday 24th September 2016 – 10:45 – 12:45<br/>
        <strong>Location:</strong> Conrad Naber Lecture Hall, Reimer Lust Hall, Jacobs University Campus
      </p>

      <h2>Agenda</h2>
      <ul>
        <li>Welcome</li>
        <li>Annual and financial report from the Alumni Board</li>
        <li>Alumni Board election results</li>
        <li>
          Jacobs University and Alumni Community:<br/>
          A Vision for an Institutional Partnership
        </li>
      </ul>

      <p>
        Please note the General Assembly will be live-streamed, recorded and made available to the members of the Alumni Association who log in to AlmaLink. If you attend the assembly, you agree that you and/or your statements could be recorded.Watch the GA here:
      </p>
      <p>
        <a href="http://livestream.com/accounts/7600301/events/6349312">http://livestream.com/accounts/7600301/events/6349312</a>
      </p>
    </article>
  )
}


