
const c = require('csam/lib/component')
const Link = require('../../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">LAUNCHING A NEW PROJECT: GENERATION FUND, a redesigned Alumni Scholarships 2.0</h1>
      <p>
        The idea of an Alumni Scholarship originated at the five-year reunion of the Class of 2004, and was further undertaken in the following years, on behalf of Alumni who felt strongly committed to contribute, as a remarkable example of giving back to the unique place which we all call home.
      </p>
      <p>
        This year we are launching a new redesigned Alumni Scholarship 2.0 – the <b>Generation Fund</b>, which has already been kicked off at the Homecoming dinner of Class of ‘04 and ‘09.
      </p>
      <p>
        For more information about the new project, refer to the <Link title="Generation Fund" href="/alumni-projects/generation-fund">Generation Fund</Link> page.
      </p>
      <p>
        While launching the new project, you can still find information related&nbsp;to the previous Alumni Scholarships on this page below.
      </p>

      <h2>Alumni Scholarships – Believing in Making a Difference!</h2>

      <figure class="uk-grid uk-grid-small uk-child-width-1-3" uk-grid>
        <div>
          <img src="/media/what-we-do/almalink_scholarships_3.png" />
        </div>
        <div>
          <img src="/media/what-we-do/img1.jpg" />
        </div>
        <div>
          <img src="/media/what-we-do/brium.jpg" />
        </div>
      </figure>
      <p>
        <strong>“Jacobs University changed my life”</strong> – this is a statement a lot of Alumni well relate to. The Alumni Scholarships aim to engage Alumni in providing a life changing experience to deserving students looking to shape their future at Jacobs.
      </p>
      <p>
        The concept behind Class Scholarships is simple and genius at the same time. At Jacobs University, we strongly believe in the unique contribution that every individual brings to campus. In a similar fashion, every Class has made their mark on the culture and environment of the University in a very unique way.
      </p>
      <p>
        So, instead of simply giving money away, we want the Alumni Scholarships to reflect this unique spirit of the Class sponsoring it. Scholarships are linked to graduating classes and each Class has a Class Committee, elected from within it’s body, which will define the theme of the scholarship, and hence the criteria that the recipient will need to fulfill.
      </p>
      <p>
        This way, the Alumni will continue to shape the structure of the student body and their university.
      </p>
      <p>
        And it’s not only about that one person receiving the scholarship. By working closely with the Admissions Office to advertise the Scholarships and it’s themes, we directly shape the image of the kind of person Jacobs University would like to attract.
      </p>
      <p>
        What a legacy to leave!
      </p>

      <figure class="uk-grid uk-grid-small uk-child-width-1-3" uk-grid>
        <div>
          <img src="/media/what-we-do/sr1.png" />
        </div>
        <div>
          <img src="/media/what-we-do/sr2.png" />
        </div>
        <div>
          <img src="/media/what-we-do/sr3.jpg" />
        </div>
      </figure>

    </article>
  )
}

