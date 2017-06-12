
const c = require('csam/lib/component')

module.exports = {
  title: 'Mailhost is discontinued on Nov 2nd, 2015',
  date: 'October 31st, 2015',
  author: 'Stefan Anca',
  alias: '/board-news/12-mailhost-is-discontinued',
  titleImage: '/media/board-news/Mailhost_Discontinued.png',
  preview: 'The old Jacobs Alumni e-mail server, called Mailhost, will be discontinued on Monday 02.11.2015. The old e-mail server was running in parallel with the new Google-hosted Alumni e-mail service since April 2015. What does this',
  content: (
    <div>
      <p>
        The old Jacobs Alumni e-mail server, called Mailhost, will be discontinued on Monday 02.11.2015. The old e-mail server was running in parallel with the new Google-hosted Alumni e-mail service since April 2015. What does this mean for us Alumni?
      </p>
      <p>
        <strong>Are you using the Google web interface to check e-mails?</strong><br/>
        Then nothing changes for you. If you already use the Google interface to check your Alumni emails, then you’re certain that you use the new e-mail server.
      </p>
      <p>
        <strong>Are you using an e-mail client (i.e. Outlook or Thunderbird) to check e-mails?</strong><br/>
        If you check your Alumni e-mail account from an e-mail client, you have to make sure that you are using the correct POP/IMAP settings for the Google-hosted Alumni e-mail.
      </p>
      <p>
        <span style="color:red">Wrong: <code>mailhost.jacobs-alumni.de</code>
        </span>
      </p>
      <p>
        Correct: <code>pop.gmail.com</code>/<code>imap.gmail.com</code>
      </p>
      <p>
        For the correct settings and complete instructions on how to check your Alumni e-mail from an e-mail client, please visit <a href="https://support.google.com/mail/troubleshooter/1668960?hl=en&amp;ref_topic=3397500" target="_">this site</a>.
      </p>
      <p>
        This is the last step of our E-mail migration process described <a href="http://jacobs-alumni.de/email/google-apps-migration-faq/">here</a>.
      </p>
    </div>
  )
}
