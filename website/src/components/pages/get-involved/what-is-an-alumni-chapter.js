
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">What is an Alumni Chapter?</h1>

      <figure>
        <img src="/media/get-involved/what-is-an-alumni-chapter-title.png" />
      </figure>

      <p>Alumni chapters are groups of alumni who share a common ground and come together to foster the Jacobs network. As such chapters form the hubs of the alumni network, where alumni not only stay in touch but also forge new connections. They are about keeping the spirit of our university alive by supporting each other a life long wherever we are on the globe. In this manner they also spread the name of our university all over the world. The common goals of all alumni chapters are the following.</p>
      <ul>
        <li>Build and reinforce a network among alumni based on opportunities for growth, exchange and support on a personal, professional and social level.</li>
        <li>Help in promoting the unique character of the university and ensure a continuous commitment of alumni to the university and its long-term advancement, through support for current students and other activities.</li>
      </ul>
      <p>Every Alumni Chapter has a Chapter Leader who serves as a contact point for both members and the board of the Alumni Association. The specific common grounds Alumni Chapters are based, can in principle be very diverse. However, there are three basic types of chapters: </p>

      <h2>1. Local chapters</h2>
      <p>Local chapters are groups of alumni living in a certain geographical area, who come together and live the Jacobs network locally. They are the physical meeting point away from Jacobs. Local chapters act as a first point of contact not only for new alumni in a particular area, but also for current students located in the area temporarily, e.g. for their internships. </p>

      <h2>2. Club chapters</h2>
      <p>Club chapters are groups of alumni who have been part of a particular club on campus and want to continue supporting them. The members of club chapters stay informed on the activities and events of the club, receiving invitations to participate and get involved. The chapter leader maintains an even closer connection to the club itself. Currently, there are two club chapters: J-Capella Alumni and Rowing Alumni.</p>

      <h2>3. Subject chapters</h2>
      <p>Subject chapters are digital platforms on defined subjects such as majors, causes or careers. The members of a subject chapter share a common interest in one topic. The focus of those chapters is not on physically meeting but on discussing the common topic and sharing content on it. The chapter leader also functions as a moderator here. Currently, there is one subject chapter: ISS Alumni.</p>
    </article>
  )
}
