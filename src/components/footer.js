
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <footer class="footer">
      <div class="col2 horizontal-containers">
        <div>
          <h3>Links1</h3>
          <ul class="inline nolisticon">
            <li><a href="https://www.facebook.com/jacobsalumni" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/JacobsAlumni" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/jacobsalumni/" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/groups/77362/profile" target="_blank">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h3>Links2</h3>
          <ul class="inline nolisticon">
            <li><a href="https://www.facebook.com/jacobsalumni" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/JacobsAlumni" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/jacobsalumni/" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/groups/77362/profile" target="_blank">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h3>Links3</h3>
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

      <div class="col2 pt0 pb0 copyright">
        <p>
          Copyright &copy; 2017 Jacobs University Alumni Association. All Rights Reserved. <a href="/imprint">Impressum / Imprint</a>
        </p>
      </div>
    </footer>
  )
}
