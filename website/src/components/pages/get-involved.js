
const c = require('csam/lib/component')
const Link = require('../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Get involved!</h1>

      <p class="uk-text-lead">As an Alumna or Alumnus, most of us want to get involved with the Alumni community as well as the current student body. Building on your experience at and after Jacobs University, you can help in a variety of ways.</p>

      <figure class="uk-grid uk-grid-small uk-child-width-1-3" uk-grid>
        <div>
          <img src="/media/get-involved/get1.jpg" />
        </div>
        <div>
          <img src="/media/get-involved/img1.jpg" />
        </div>
        <div>
          <img src="/media/get-involved/b3.jpg" />
        </div>
      </figure>

      <p>Get involved …</p>
      <ul>
      <li>in your <Link href="/chapters" style="color:#00b1ec;">Alumni Chapter</Link>, for instance as a Chapter Leader, in order to stay in touch with other alumni
      </li>
      <li>by providing <Link style="color:#00b1ec;" href="/scholarships">Alumni Scholarships</Link> to sponsor a prospective or current student
      </li>
      <li>in the Alumni “Task Force” Initiative, in order to support the restructuring processes of our Alma Mater
      </li>
      <li>in the Careers Services Center Initiative, to talk about your career after Jacobs to current students
      </li>
      <li>in student mentoring, to help current students cope with academic challenges by sharing your experience
      </li>
      </ul>
      <p>Together, we will rock!</p>
      <p>Check out below all the great upcoming events in your area and on campus!</p>
   </article>
  )
}
