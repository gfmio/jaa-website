
const c = require('csam/lib/component')

const Link = require('../../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Jacobs Alumni Homecoming</h1>

      <figure class="uk-grid uk-grid-small uk-child-width-1-3" uk-grid>
        <div>
          <img src="/media/what-we-do/homecoming/DH-119-7349g.jpg" />
        </div>
        <div>
          <img src="/media/what-we-do/homecoming/DH-119-7555.jpg" />
        </div>
        <div>
          <img src="/media/what-we-do/homecoming/DH-119-7402.jpg" />
        </div>
      </figure>

      <p class="uk-text-lead">
        Every year in fall Jacobs alumni from all over the world reunite at their alma mater. For the classes that celebrate their 5th or 10th anniversary, this is a very special weekend of the year. While there are many highlights such as the Gala Dinner or the Theme Party, simply getting together and seeing old faces as well as connecting with new alumni, is what makes this event so memorable every year.
      </p>

      <p>
        The event is organized by the Class Representatives of the anniversary classes in collaboration with the Assessor for Event Management of the Alumni Association and the Alumni Office of the university.
      </p>
      <ul>
        <li><Link href="/homecoming/2017"><strong>Homecoming 2017</strong></Link></li>
        <li><Link href="/homecoming/2016">Homecoming 2016</Link></li>
        <li><Link href="/homecoming/2015">Homecoming 2015</Link></li>
        <li><Link href="/homecoming/2014">Homecoming 2014</Link></li>
      </ul>
    </article>
  )
}


