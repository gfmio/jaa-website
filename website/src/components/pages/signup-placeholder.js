
var validator = require('validator');

const c = require('csam/lib/component');

const Link = require('../uikit/link');

module.exports = function(props, children) {
  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Join the Jacobs Alumni Association</h1>

      <p class="uk-text-lead">
        In order to become a member of the association, you need to provide some personal information about yourself, which will require 5 to 10 minutes of your time.
      </p>
      <p class="uk-text-lead">
        Students of the current graduating class can enjoy up to two years free membership, students of the previous graduating class can enjoy up to one years free membership and all other new alumni members enjoy 6 months free membership.
      </p>
      <p class="uk-text-lead">
        <strong>The registration is currently being upgraded. Please check back later!</strong>
      </p>
    </article>
  )
}
