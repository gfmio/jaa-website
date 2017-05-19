
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  var toggleOffCanvas = function() {

  }

  return (
    <footer class="footer uk-background-secondary uk-light uk-padding">
      <div class="uk-grid uk-margin-medium-bottom uk-child-width-1-2@s uk-child-width-1-4@m" uk-grid>
        <div>
          <h3>Links 1</h3>
          <ul class="nolisticon inline">
            <li><a href="/">Home</a></li>
            <li><a href="/designtest">Design test</a></li>
            <li><a href="/error">Error 404 page</a></li>
          </ul>
        </div>

        <div>
          <h3>Links 2</h3>
          <ul class="inline nolisticon">
            <li><a href="https://www.facebook.com/jacobsalumni" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/JacobsAlumni" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/jacobsalumni/" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/groups/77362/profile" target="_blank">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h3>Links 3</h3>
          <ul class="inline nolisticon">
            <li><a href="https://www.facebook.com/jacobsalumni" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/JacobsAlumni" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/jacobsalumni/" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/groups/77362/profile" target="_blank">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h3>Social media</h3>
          <ul class="inline nolisticon">
            <li><a href="https://www.facebook.com/jacobsalumni" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/JacobsAlumni" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/jacobsalumni/" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/groups/77362/profile" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div class="col2 pt0 pb0 copyright uk-text-small">
        <p>
          Copyright &copy; 2017 Jacobs University Alumni Association. All Rights Reserved.<br/>
          <a href="/privacy">Datenschutzerklärung / Privacy Policy</a> <a href="/imprint">Impressum / Imprint</a>
        </p>
      </div>
    </footer>
  )
}
