
const c = require('csam/lib/component')
const Link = require('../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">What we do</h1>

      <figure class="uk-grid uk-grid-small uk-child-width-1-3" uk-grid>
        <div>
          <img src="/media/what-we-do/what1.jpg" />
        </div>
        <div>
          <img src="/media/what-we-do/what2.jpg" />
        </div>
        <div>
          <img src="/media/what-we-do/what3.jpg" />
        </div>
      </figure>

      <p>As members of the Alumni Association, you have access to the following services:</p>

      <h2>Off-Campus Services</h2>

      <h3>Career Advancement</h3>
      <ul>
        <li>Job offers on AlmaLink (coming soon!)</li>
      </ul>

      <h3>Staying in contact with old friends and making new ones</h3>

      <ul>
        <li>Find Alumni service (coming soon!)</li>
        <li><Link href="/homecoming">Annual Homecoming</Link></li>
        <li><Link href="/alumni-chapters">Alumni Chapters</Link></li>
        <li><Link href="https://www.facebook.com/groups/119890224726756/633951449987295/">Alumni facebook group</Link></li>
      </ul>

      <h3>Giving back</h3>

      <ul>
        <li><Link href="/alumni-projects/alumni-scholarships">Scholarships</Link></li>
        <li>Mentorship Program (coming soon!)</li>
      </ul>

      <h3><Link href="/newsletter">Alumni Newsletter</Link></h3>

      <p>
        The online newsletter informs about the Alumni Association and their recent projects. It offers an interesting read towards relevant issues and stories concerning the Alumni world and you can find out important happenings and events on and around campus.
      </p>
      <h3>RefWorks</h3>
      <p>
        RefWorks, the online research management, writing and collaboration tool used at Jacobs University is designed to help researchers easily gather, manage, store and share all types of information, as well as generate citations and bibliographies. The Alumni Office will provide you with a group code so you can use the program even after your time at Jacobs!
      </p>

      <h3>Alumni e-mail address</h3>
      <p>
         If you want to set-up your Alumni E-mail, need info concerning events or would like to buy the latest university merchandise – feel free to <Link href="/contact">contact the Alumni Office!</Link> … and if you need anything else not provided here, we will do our best to arrange this for you as well. <Link href="https://mailhost.jacobs-alumni.de/src/login.php" target="_blank">You can check your alumni emails by logging into the email system.</Link>
      </p>

      <div class="uk-alert uk-alert-primary">
        <h3>
            <figure class="inline uk-margin-remove-bottom uk-margin-small-right">
              <img src="/media/who-we-are/check.png" />
            </figure>
          Visiting Campus?
        </h3>
        <p>
          Contact the Alumni Office! You can use the sports facilities, library, even get free WLAN.
        </p>
      </div>

      <h2>Campus Services</h2>

      <h3>Library Guest Card</h3>
      <p>
        You can get access to the library with a „Library Guest Card“. For 10,-€ deposit you will receive the card and be able to use the library. Due to publishers’ license restrictions, Jacobs alumni can only access electronic resources on campus. More information on the IRC can be found here <Link href="http://www.jacobs-university.de/library">http://www.jacobs-university.de/library</Link>
      </p>

      <h3>Wireless on Campus</h3>
      <p>
        Whenever you are on campus, you will of course have free access to our wireless network. Get in touch with the Alumni Office to get your login credentials before you arrive on campus.
      </p>

      <h3>Sports Facilities</h3>
      <p>
        The gym in our new Sports and Convention Centre (SCC) is to your full disposal. The Recreation Card with your personal settings is available for 50,-€ per semester. Contact the Alumni Office to receive access. Find more informmation here <Link href="http://www.jacobs-university.de/sports-and-convention-center">http://www.jacobs-university.de/sports-and-convention-center</Link>
      </p>
    </article>
  )
}
