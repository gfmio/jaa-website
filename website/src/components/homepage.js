
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article uk-text-center">
      <div class="graduation-2017">
        <h1 class="article-title text-center">
          Congratulations Class of 2017!
        </h1>
        <figure>
          <img src="https://www.jacobs-university.de/sites/default/files/images/jacobs_university_news_graduation_2016.jpg" />
        </figure>
      </div>

      <figure>
        <img src="media/logo.jpg" />
      </figure>

      <p class="uk-text-lead">
        The Alumni Association of Jacobs University Bremen
      </p>
    </article>
  )
}
