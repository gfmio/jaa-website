
const c = require('csam/lib/component')

const Link = require('../../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Elections</h1>

      <hr/>

      <h2>Alumni Board Elections 2017</h2>

      <p>
        The voting for this election has concluded.
      </p>

      <h3>Application for Assessor PR & Communications</h3>

      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
        <div class="uk-flex-last@s uk-flex-middle uk-card-media-right uk-cover-container">
            <div class="uk-width-1-1">
              <div class="embed-container">
                <iframe src="https://drive.google.com/file/d/0B-Pk-gF-jlVdVW1XMDhLYkpjSHc/preview" frameborder="0" allowfullscreen="allowfullscreen">
                </iframe>
              </div>
            </div>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Lida-Maria-Lottko</h3>
            <p>Applicant for Assessor PR & Communications</p>
            <p><Link href="https://www.linkedin.com/in/lidamarialottko">See her LinkedIn profile</Link></p>
            <figure>
              <img src="/media/who-we-are/elections/2017/Profile-picture-300x200.jpg" />
            </figure>
          </div>
        </div>
      </div>

      <h3>Application for Assessor Event Management</h3>

      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
        <div class="uk-flex-last@s uk-flex-middle uk-card-media-right uk-cover-container">
            <div class="uk-width-1-1">
              <div class="embed-container">
                <iframe src="https://drive.google.com/a/jacobs-alumni.de/file/d/0B5SQg7EnyI03VGxTRjgwS2M3Nzg/preview" frameborder="0" allowfullscreen="allowfullscreen">
                </iframe>
              </div>
            </div>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Max Lohmann</h3>
            <p>Applicant for Assessor Event Management</p>
            <p><Link href="https://www.linkedin.com/in/max-lohmann-62440735">See his LinkedIn profile</Link></p>
            <figure>
              <img src="/media/who-we-are/elections/2017/Max_Lohmann-300x205.png" />
            </figure>
          </div>
        </div>
      </div>

      <p>
        Vote for the above candidates here. You can only vote once per registered user. If you don’t see the voting box at this point, you’ve probably voted already :)
      </p>
      <p>
        Voting is open until Sunday, 26th Mar. 2017, 23:59 CEST.
      </p>
      <p>
        If you encounter any issues, please contact <Link href="mailto:support@jacobs-alumni.de">support@jacobs-alumni.de</Link>.
      </p>

      <h3>Position descriptions</h3>

      <div class="uk-grid uk-grid-small" uk-grid>
        <div class="uk-width-auto@m">
          <div>
            <ul id="tabList" class="uk-tab uk-tab-left" uk-tab="connect: #form-steps">
              <li class="uk-active"><a href="#">Assessor for PR & Communications</a></li>
              <li class=""><a href="#">Assessor for Event Management</a></li>
            </ul>
          </div>
        </div>
        <div class="uk-width-expand@m">
          <ul id="form-steps" class="uk-switcher" uk-switcher="animation: uk-animation-fade">
            <li>
              <div class="embed-container">
                <iframe src="https://drive.google.com/a/jacobs-alumni.de/file/d/0B8rNJ2excuRGVC1FQkhZR3BHVkE/preview" frameborder="0" allowfullscreen="allowfullscreen">
                </iframe>
              </div>
            </li>
            <li>
              <div class="embed-container">
                <iframe src="https://drive.google.com/a/jacobs-alumni.de/file/d/0B8rNJ2excuRGbFVtTUd4bkkyMUk/preview" frameborder="0" allowfullscreen="allowfullscreen">
                </iframe>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr/>

      <h2>Alumni Board Elections 2016</h2>

      <p>
        The voting for this election has concluded.
      </p>

      ...

    </article>
  )
}
