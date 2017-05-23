
const c = require('csam/lib/component')

const Link = require('../../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Alumni Chapters: Frequently Asked Questions</h1>

      <p>
        <strong>How can I join an Alumni Chapter?</strong>
        <br/>
        In order to join an Alumni Chapter, you have to get in touch with chapter leader. The contact details are available on this website. If you are only staying in a certain city or area temporarily, simply join the Facebook page of the Alumni Chapter to get in touch with fellow alumni and join their events.</p>
      <p>
        <strong>How do I know which alumni live in my area?</strong>
        <br/>
        The new AlmaLink offers a search function to find out about where alumni live. As this is dependent on up-to-date date, Facebook can also be very helpful here. Typing in “My friends who live in Stuttgart” in the search field, will give you a list of Facebook friends living in that city. “Friends of friends” will even give you second-order connections.</p>
      <p>
        <strong>How do I know what Alumni Chapters exists so far?</strong>
        <br/>
        While the Alumni Association aims at keeping track of all Alumni Chapters, new chapters might not always be on this website very quickly. A good way to find out about chapters is by searching Facebook with the keywords “Jacobs Alumni Chapter”. Facebook will auto-complete the search and suggest all the existing alumni chapters.</p>
      <p>
        <strong>How can I officially register an Alumni Chapter?</strong>
        <br/>
        In order to register a new Alumni Chapter you will have to submit a <Link href="/chapter/registration_form.pdf" target="_blank">registration form</Link>. A detailed step-by-step guide can be found <Link href="/alumni-chapters/starting-a-chapter">here</Link>.</p>
      <p>
        <strong>When advertising the Alumni Chapter or its events are there any guidelines?</strong>
        <br/>
        If you create any communication material you will have to adhere to the <Link href="/chapter/corporate_design_guidelines.pdf" target="_blank">corporate design guidelines</Link> of the Alumni Association. In doubt you can send your communication material to the <Link href="/alumni-board">Assessor for Event Management</Link> for approval before using it.</p>
      <p>
        <strong>Can I get any funding for the chapter from the university?</strong>
        <br/>
        Currently, there is no possibility to get any funding neither from the university nor the Alumni Association. However, with the implementation of membership fees for alumni in the association the situation is very likely to change in the near future.</p>
      <p>
        <strong>How can I motivate people if they don’t show up for events?</strong>
        <br/>
        There can be many reasons for a low turnout for a certain event. And it can get frustrating, especially if a lot of effort has gone into organising the event. In general it is beneficial to create a sense of liability among the participants, for example by creating a Doodle, making a reservation for a certain number of people, or setting a deadline for confirmations and cancellations. In any case a good communication is vital.</p>
      <p>
        <strong>What do I do if I notice the local chapter leader is not doing a good job?</strong>
        <br/>
        First you might want to address the local chapter leader directly and even offer to help out. If that still doesn’t work, contact the <Link href="/alumni-board">Assessor for Event Management</Link> about your problem. The assessor can talk to the chapter leader and push for change.</p>
      <p>
        <strong>What if there is a local chapter in my area or region, but not in my city?</strong>
        <br/>
        If there are more than five alumni in your city, go ahead and start a local chapter there as well. If not, you might want to get in touch with the existing chapter in your area and ask them to organise meetings and events also in your city.</p>
    </article>
  )
}
