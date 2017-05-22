
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">The Alumni Association e.V.</h1>
      <p>
        The Alumni Association was founded in June 2004 by the first Jacobs University graduating class. We are the growing network of (former) Jacobs University students and friends. The Alumni Association Board and the Alumni Officer work hard to provide you with the infrastructure to stay in touch with friends and former classmates, promote personal growth and give back to your alma mater. And we invite you to join us! Regular events, an annual Homecoming, Alumni Chapters in more and more cities around Europe and the Globe, an intranet with forums, profiles, and job offers, an Alumni Fund for donations (such as for scholarships), access to the gym and the IRC as well as numerous opportunities for participation provide added value for Alumni and the entire Jacobs University community, furthering commitment to Jacobs University.
      </p>
      <div class="uk-alert uk-alert-primary">
        <h3>
            <figure class="inline uk-margin-remove-bottom uk-margin-small-right">
              <img src="/media/who-we-are/qlookingfor.png" />
            </figure>
          Looking for Someone?
        </h3>
        <p>
          Contact the Alumni Office! They are sure to be able to assist in finding your long lost roommate.
        </p>
      </div>
      <h2>
        Jacobs Alumni & Friends GmbH
      </h2>
      <p>
        In early 2008 Jacobs Alumni & Friends GmbH was formally set up as a company owned 99% by the Alumni Association, with the remainder owned by Jacobs University. The purpose of the organization is to provide the legal framework for the alumni to become shareholders in the university. It is a new structure that comes as an extension of the existing Alumni Association. Jacobs Alumni & Friends GmbH has its own supervisory board, consisting of three alumni and three other members represented by figures from public life. It also sends a representative, i.e. the president of the Alumni Association e.V., to the two highest supervisory bodies, the Board of Trustees and the Board of Governors of the university. At this key position the alumni body is represented in the decision making process.
      </p>
    </article>
  )
}
