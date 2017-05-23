
const c = require('csam/lib/component')

const Link = require('../../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">How to start an Alumni Chapter?</h1>

      <figure>
        <img src="/media/get-involved/how-to-start-an-alumni-chapter-title.png" />
      </figure>

      <p>Starting a local chapter is ridiculously easy! Just gather the people in your area, start a Facebook group named “<Link title="Jacobs Alumni Chapter XYZ" href="https://www.facebook.com/search/str/jacobs%2Balumni%2Bchapter/keywords_groups" target="_blank">Jacobs Alumni Chapter XYZ</Link>” and organize your first event or discussion. Afterwards, fill in the registration form and send it per email to the <Link href="/alumni-board">Assessor for Event Management</Link>&nbsp;and tell us that you exist. Done!</p>
      <p>Basically done. Starting an Alumni Chapter is very simple, keeping it alive a bit more challenging. To achieve longer-term success, we recommend the following when starting an Alumni Chapter:</p>
      <ol>
        <li>Do coordinate with the <Link href="/alumni-board">Assessor for Event Management</Link>. The role of this position includes the support and the development of Alumni Chapters.</li>
        <li>There should be at least five alumni as members including one chapter leader. There are several options to find alumni to join a chapter:</li>
      </ol>
      <ul>
        <li>Use the key word search function of AlmaLink to find alumni according to location, major etc.</li>
        <li>Use the Facebook “<Link href="http://en.wikipedia.org/wiki/Facebook_Graph_Search" target="_blank">graph search</Link>” to find Facebook friends or even friends of friends.</li>
        <li>Make a general call in the Facebook group “<Link href="https://www.facebook.com/groups/119890224726756/" target="_blank">Jacobs University Alumni</Link>”</li>
      </ul>
      <ol>
        <li>The Local Chapter Leader should be planning to stay longer in the area. It does not make sense to have a leader for less than one year. Moreover, the leader should know the city or area well. In case of a club or subject chapter, the leader should have a strong and visible connection, e.g. former club membership.</li>
        <li>Sharing a yearly plan of activities with the <Link href="/alumni-board">Assessor for Event Management</Link> and the chapter at the beginning of the (academic) year, can be very beneficial. The assessor can support in the organization and advertisement, for example. In case of local chapters for example, the cycle of events can be nicely started with having a welcome event for new graduate students at the beginning of fall semester.</li>
      </ol>
    </article>
  )
}
