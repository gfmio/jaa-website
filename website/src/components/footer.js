
const c = require('csam/lib/component')

const Link = require('./uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  var toggleOffCanvas = function() {

  }

  return (
    <footer class="footer uk-background-secondary uk-light uk-padding">
      <div class="uk-grid uk-margin-medium-bottom uk-child-width-1-2@s uk-child-width-1-4@m" uk-grid>
        <div>
          <figure>
            <p>
              The Jacobs Alumni Association is the growing network of former Jacobs University students and friends.
            </p>

            <Link href="https://www.jacobs-university.de" target="_blank">
              <img src="/media/jub_logo.png" alt="Jacobs University Bremen" />
            </Link>
          </figure>
        </div>

        <div class="uk-visible@m"></div>
        <div class="uk-visible@m"></div>

        <div>
          <h3>Social media</h3>
          <ul class="inline nolisticon">
            <li class="uk-margin-small-right">
              <Link class="uk-icon-button bg-facebook" href="https://www.facebook.com/jacobsalumni" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="facebook" ratio="1"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg>
              </Link>
            </li>
            <li class="uk-margin-small-right">
              <Link class="uk-icon-button bg-twitter" href="https://twitter.com/JacobsAlumni" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="twitter" ratio="1"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"></path></svg>
              </Link>
            </li>
            <li class="uk-margin-small-right">
              <Link class="uk-icon-button bg-instagram" href="https://www.instagram.com/jacobsalumni/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="instagram" ratio="1"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path><circle cx="14.87" cy="5.26" r="1.09"></circle><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg>
              </Link>
            </li>
            <li class="">
              <Link class="uk-icon-button bg-linkedin" href="https://www.linkedin.com/groups/77362/profile" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="linkedin" ratio="1"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path></svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="copyright uk-text-small">
        <p>
          Copyright &copy; 2017 Jacobs University Alumni Association. All Rights Reserved.<br/>
          <Link href="/privacy">Datenschutzerklärung / Privacy Policy</Link> <Link href="/imprint">Impressum / Imprint</Link>
        </p>
      </div>
    </footer>
  )
}
