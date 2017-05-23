
const c = require('csam/lib/component')

const Link = require('../../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Jacobs University Alumni Office</h1>
      <p class="uk-text-lead">As an Alumni Board we are constantly working for you to improve your Alumni experience. If you have any suggestions, questions, opinions or would like to participate in our projects, please get in touch with us at:</p>
      <p>Email: <a href="mailto:alumni@jacobs-university.de">alumni@jacobs-university.de</a> or <a href="mailto:alumni-board@jacobs-alumni.de">alumni-board@jacobs-alumni.de</a></p>
      <p>Phone: +49.421.200.4005</p>
      <p>Fax: +49.421.200.49.4402</p>
      <p>The Alumni Office is located on the <Link title="link to website Jacobs University" href="https://www.jacobs-university.de">Jacobs University</Link> campus, Reimar Luest Hall, room 250 Campus Ring 1, 28759 Bremen</p>
    </article>
  )
}
