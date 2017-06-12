
const c = require('csam/lib/component')

module.exports = {
  title: 'Email forwarding to Mailhost gets discontinued',
  date: 'September 3rd, 2015',
  author: 'Stefan Anca',
  alias: '/board-news/09-email-forwarding-to-mailhost-gets-discontinued',
  titleImage: '/media/board-news/Screen-Shot-2015-09-04-at-00.59.31.png',
  preview: 'As we finalize the migration of the e-mail accounts to Google Apps for Education, some users have encountered issues due to the previous university-hosted mail server which lead to “mailbox full” messages (even though now',
  content: (
    <div>
      <p>
        As we finalize the migration of the e-mail accounts to Google Apps for Education, some users have encountered issues due to the previous university-hosted mail server which lead to “mailbox full” messages (even though now ALL alumni accounts have unlimited space) and alleged bounced emails.
      </p>
      <p>
        The errors are due to the old mail server limitations, and thus, in order to improve your e-mail experience, we have decided that <strong>the</strong> <strong>forwarding of emails to the old server will be disabled earlier than originally announced, <span data-term="goog_1803746487">Sunday 06.09.2015</span>, at <span data-term="goog_1803746488">18:00 CEST</span>.</strong>
      </p>
      <p>
        You will still be able to access your old emails on both servers, however all new emails will only be available on the Google servers. For most of you this will have no effects whatsoever, however, if you are using an email client and pulling your emails from “<a href="http://mailhost.jacobs-alumni.de/">mailhost.jacobs-alumni.de</a>” you will need to update your configuration to the new server. Detailed instructions can be found on the <a href="http://jacobs-alumni.de/email/google-apps-migration-faq/">migration page</a>.
      </p>
      <p>
        If you have any difficulties or questions during this migration process, please get in touch with us at <a href="mailto:support@jacobs-alumni.de">support@jacobs-alumni.de</a>.
      </p>
    </div>
  )
}
