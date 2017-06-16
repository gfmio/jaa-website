
const c = require('csam/lib/component')
const EmbedIFrame = require('../../../uikit/embed-iframe')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Alumni Newsletter November 2015</h1>
      <p>
        Welcome to the latest edition of the Jacobs Alumni Newsletter! Our top stories this month are Homecoming 2015, Contributions Model updates and new edition of Eye on Alumni!
      </p>

      <h2>Contents</h2>
      <ul>
        <li>
          <a href="#homecoming-2015">Homecoming 2015</a>
        </li>
        <li>
          <a href="#eye-on-alumni">Eye on Alumni</a>
        </li>
        <li>
          <a href="#our-association-has-a-contributions-model">Our Association has a Contributions-Model!</a>
        </li>
        <li>
          <a href="#career-fair-2016-8211-come-and-join-us">Career Fair 2016 – Come and join us!</a>
        </li>
        <li>
          <a href="#jacobs-career-fair-2015-8211-campus-center-at-jacobs-university-8211-25-february-2015">Jacobs Career Fair 2015 – Campus Center at Jacobs University – 25. February 2015</a>
        </li>
        <li>
          <a href="#general-assembly-2015">General Assembly 2015</a>
        </li>
        <li>
          <a href="#it-tip-of-the-day">IT Tip of the Day</a>
        </li>
      </ul>

      <hr />

      <h2>
        Homecoming 2015
      </h2>
      <p>
        One weekend, two anniversary classes (2005 and 2010), 160 participants and countless old memories relived. This year’s Homecoming surely added a new great memory to the Alumni who came to Bremen from all over the world.
      </p>
      <p>
        This year’s theme “Then and Now” addressed both the memories of the past and appreciation of the present. Alumni got the chance to listen to their old professors in the “Open Lectures”, compete against other colleges in the “Jacobs Games (Olympix)”, and dance the night away at the sports theme party “From Athens to Rio”. In the “Career Symposium” Alumni could network with current students and companies alike, while the “General Assembly” provided an update of the Alumni Association as well as the state of affairs of the university. However, the biggest highlights certainly were individual moments with old friends!
      </p>
      <p>
        Check out pictures from the weekend <a href="http://jacobs-alumni.de/aci/picture-gallery/">here</a>!
      </p>
      <p>
        The Alumni Board would like to once again thank all the people involved for such a memorable and successful event. We are looking forward to next year already!
      </p>
      <p>
        In concrete terms, we are looking forward to September 23-25, 2016. That’s right, you may save the date already. Again, Homecoming will be combined with the Jacobs Games and the Career Symposium. Maybe next year there will be the very first Alumni cheerleading team that joins the competition 😉
      </p>

      <hr />

      <h2>
        Eye on Alumni
      </h2>
      <h4><strong>Chirin Khawatmi (‘10)</strong></h4>
      <figure class="uk-padding-small uk-margin-remove" style={{ float: 'right' }}>
        <img src="/media/who-we-are/Chirin_Khawatmi.jpg" alt="" />
      </figure>
      <p>
        After graduating from Jacobs with a BSc in International Logistics, Chirin continued her higher education at Hult University, obtaining a Master’s in International Business. Further on, she was employed at Johnson &amp; Johnson as an Assistant Supply and Demand Planner, after which she decided to start up her own business, thus the beginnings of a new venture – Mama’s Box.
      </p>
      <p><strong>Current location:</strong> Dubai, United Arab Emirates</p>
      <p><strong>Nationality</strong> Syrian</p>
      <p><strong>Job title:</strong> Founder and Owner</p>
      <p><strong>Current employer:</strong> <a href="http://mamas-box.com/">Mama’s Box</a>
      </p>
      <p><em>What was your journey since you graduated from Jacobs?</em></p>
      <p>I moved to Dubai to pursue my Masters, after graduation I worked for Johnson &amp; Johnson. I quit my job when I was pregnant to be able to take care of my baby since the maternity leave in the UAE is very short.  After having my second baby I decided to start my own business – a subscription box service for pregnant and new mothers in the UAE. This month the business turns one year old!</p>
      <p><em>What is the story behind Mamas Box?</em></p>
      <p>My experience of  living in Dubai away from family and having my two children very close in age inspired me to start Mama’s Box. Mama’s Box is basically a monthly box of surprise goodies and essentials customized to the mother’s pregnancy stage or her baby’s age and delivered to her doorstep monthly. It is a fantastic way for mothers to be introduced to new products and brands at just the right time and a great way for brands to allow mothers to test their products!</p>
      <p><em>What plans do you have for the near future – for your business, as well as personal?</em></p>
      <p>We aim to grow Mama’s Box as there is currently no other business that does what we do in the UAE. We also plan to expand in the ‘pregnancy’ sector as there is a lot of room for new ideas. In terms of personal plans – simply to focus on my two children and make the best of this special time with them!</p>
      <p><em>What tips do you have for those who want to start their own business? </em></p>
      <p>If you have an idea and you really believe in it, then just do it! Logically it made no sense that I start a business with a 1 year old and a newborn, but my instincts told me go for it and I am so glad I did. </p>
      <p><em>Looking back, what do you miss most about Jacobs?</em></p>
      <p>The people for sure!</p>
      <p><em>What advice would you give to current Jacobs students?</em></p>
      <p>Enjoy every second! Time flies and there is no experience like the Jacobs Experience!</p>
      <p><em>One favorite Jacobs memory/ or one thing you are grateful for.</em></p>
      <p>This may sound crazy – but I am grateful for how hard we were pushed! It has prepared me for life and made everything ahead seam a little easier. </p>
      <p><em>Interesting fact about Chirin (&amp;Mama’s Box)</em></p>
      <p>Mama’s Box has recently been nominated &amp; is shortlisted for Time Out Kids Family Entrepreneurial Award!</p>

      <hr />

      <h2>
        Our Association has a Contributions-Model!
      </h2>
      <figure>
        <img src="/media/newsletters/2015-11/hands-600x176-1.jpg" alt="hands-600x176 (1)" />
      </figure>
      <p>
        One year’s work by the the Alumni Contributions Initiative came to an end at this year’s GA. With a total of 77 yes votes (1 against and 2 abstentions) the <a href="https://drive.google.com/open?id=0B12tib4CBut4c3drcVFVUDVFaUk">proposed by-laws</a> to the constitutions summarizing our fees model were approved.
      </p>
      <p>
        The message is simple: Enable alumni to contribute to our association without excluding anyone who isn’t financially able to. Fresh graduates will join the association as ‘Alumni Starter’ which is a free membership for 2 years. After this, they will be upgraded to ‘Alumni Contributor’ and become an active contributor to our community. Should the alumnus or alumna not be in a financial situation to do so, a simple email to the board will suffice and you can get your downgrade back to ‘Alumni Starter’ – any time, no questions asked. The ‘Alumni Patron’ is for our dedicated alumni who are in the fortunate position to contribute more generously on a regular basis.
      </p>
      <p>
        We are excited to now also financially stand on our feet. Our newly generated income cover our administrative expenses as well as future projects focussed our web-services, events, alumni chapters, student initiatives, the generation fund and any other projects that you would propose with the association’s backing. Involvement as an alumni association board member remains unpaid and honorary, of course.
      </p>
      <p>
        In the coming weeks our IT team will be super busy preparing for a smooth payment system via our website. Stay tuned for updates in the near future.
      </p>
      <p>
        You can find the bylaws on our shared space on the drive at or at the following link:
      </p>
      <p>
        <a href="https://drive.google.com/open?id=0B12tib4CBut4c3drcVFVUDVFaUk">https://drive.google.com/open?id=0B12tib4CBut4c3drcVFVUDVFaUk</a>
      </p>

      <div class="uk-overflow-auto">
        <table class="uk-table uk-table-divider uk-width-auto">
          <thead>
            <tr>
              <th class="uk-table-shrink">Tier</th>
              <th class="uk-table-shrink">Attributes</th>
              <th class="uk-table-shrink">Timing</th>
              <th class="uk-table-shrink">Rates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alumni Starter</td>
              <td class="uk-table-middle" rowspan="2"I>Google Apps, AlmaLink, Newsletters, Career Services, Job Postings, Library Resources</td>
              <td>Annual for the first 2 years after graduating</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Alumni Contributor</td>
              <td>Annual with the option to request free membership(plus possible Alumni Chapter Fees)</td>
              <td>39 € = 1 coffee per month</td>
            </tr>
            <tr>
              <td>Alumni Patron</td>
              <td>the above + Invitation to Graduation & Patron’s Round Table, Engraved Brick & Special Mention</td>
              <td>Annual (plus possible Alumni Chapter Fees)</td>
              <td>249 € = 1 coffee per week</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>
        Career Fair 2016 – Come and join us!
      </h2>
      <p>
        Dear Alumni,
      </p>
      <p>
        As you might have seen, Peter Dabrowski already send an e-mail about our 2nd Jacobs Career Fair a little while ago. There, the Career Services Center (CSC) asked for your <strong>help in promoting the event with your employers</strong>. This year was a major success and we would like to do an even better job in 2016! We still hope to count on you for getting the top employers to our campus on February 24th 2016 and look forward to hearing from you. Have you not been to last year’s fair? Check out our video on YouTube!
      </p>

      <EmbedIFrame src="https://www.youtube.com/embed/4aLD7VLNIDE?ecver=2" />

      <p>
        The first Career Fair at Jacobs University hosted 24 exhibitors, 14 presentations and workshops and more than 1,000 student visitors. Explore your professional future!
      </p>
      <p>
        We would also like to invite you all to attend the fair itself as guests and join us for the exclusive <strong>networking reception</strong> afterwards at the university club. This event offers a platform to network for all exhibitors, Jacobs University Leadership and Faculty, Jacobs Alumni and special guests. In a relaxed atmosphere, you will be able to make individual contacts and discuss potential future collaborations, for example in the areas of research and transfer. We would love to have you, our alumni, join us on this occasion! To have a better idea of who will be joining us for the networking event, please register via the following link: <a href="http://networking-jacobs-career-fair-2016.eventbrite.co.uk">http://networking-jacobs-career-fair-2016.eventbrite.co.uk</a>
      </p>

      <figure>
        <img src="/media/newsletters/2015-11/Jacobs_Career_Fair_2015_20_Compressed-300x200.jpg" alt="Jacobs_Career_Fair_2015_20_Compressed" />
      </figure>

      <p>
        On the day of the Jacobs Career Fair, we also would like to offer <strong>short workshops</strong> on a variety of topics related to career development and application tactics, for example. We already have had quite a few alumni who gave workshops in the past, and the students loved it. Hence, we cordially invite you to come to the fair and give a workshop in 2016 once more. We are open to your ideas but are also especially looking for people who can give a workshop about application tactics for example, particularly in the light of new trends and the utilization of social media channels.
      </p>

      <figure>
        <img src="/media/newsletters/2015-11/360T_3_Jacobs_Career_Fair_2015_compressed-300x200.jpg" alt="360T_3_Jacobs_Career_Fair_2015_compressed" />
      </figure>

      <p>
        <strong>Do you have ideas that could help our current Jacobs students move forward? Would you like to share your experience in a certain field?</strong>
        Get in touch with Petra Zarrath via e-mail (p.zarrath@jacobs-university.de) and let us know!
      </p>
      <p>
        All the best from the
      </p>
      <p>
        CSC team and Alumni Office!
      </p>

      <hr />

      <h2>
        General Assembly 2015
      </h2>
      <figure>
        <img src="/media/newsletters/2015-11/genassembly-300x142.jpg" alt="genassembly" />
      </figure>
      <p>
        Once again, Homecoming included a General Assembly of the Jacobs Alumni Association. This year’s Assembly took place on Saturday, the 26th of September, 2015, at 10:45, in the usual location, Conrad Naber Hall. 80 Alumni were present, predominantly from the Reunion classes, 2005 and 2010.
      </p>
      <p>
        As well as presenting the annual report of the association’s projects and budget over the last year, the Alumni Board was happy to present the new structure of the university department responsible for Alumni, namely <a href="http://www.jacobs-university.de/directory/ptapavicki">Predrag Tapavicki</a> (Head of Corporate Relations and Talent Management) and <a href="http://www.jacobs-university.de/directory/ziegler">Stephan Ziegler</a> (Alumni and Career Services Officer, class of 2010). They are the people that the Alumni Board has worked most closely with in order to organize Homecoming and Career Events over the last few months.
      </p>
      <p>
        The Financial Report presented the income that the Alumni Association gathered over the last year, made up of Homecoming tickets and Generation Fund donations. As of 23. Sept 2015, around 12.800EUR was spent on the organization of Homecoming and 490EUR on the IT infrastructure. Before the Donation Dinner, the Generation Fund had only 102EUR in it. The amount for scholarships grew significantly after the dinner, as mentioned <a href="http://jacobs-alumni.de/content/great-start-for-the-generation-fund-at-jacobshc2015/"> here</a>.
      </p>
      <p>
        The By-Laws about membership contributions were recapped and discussed broadly in the assembly. In the end, they were passed by majority vote. Thus, starting 01. January 2015, every member of the Alumni Association needs to choose between being a
        <strong>Alumni Starter</strong> (free for 2 years after graduation), <br/>
        <strong>Alumni Contributor</strong> (39EUR per year), or <br/>
        <strong>Alumni Patron</strong> (249EUR per year).
      </p>
      <p>
        For all the details about the three contribution options and the process behind them, head over to <a href="https://drive.google.com/drive/folders/0B12tib4CBut4fjQyd3BNWXUwaWpMcG9mQU9ERjhJZ2NXQjl0NXd3bmJPZWJERDZSNEJQUG8">this shared folder</a>.
      </p>
      <p>
        Stefan Anca presented an overview of the recent developments in the IT resources of the Alumni Association. The highlights were the migration to Google-hosted apps as a result of our newly acquired Google for Education status and the migration of the Alumni website to the WordPress platform. For more information about the migration check out <a href="http://jacobs-alumni.de/email/google-apps-migration-faq/">this article</a>.
      </p>
      <p>
        Elena also presented the key concepts of the Generation Fund, leading to the 9000EUR scholarship that we hope to offer as many students as possible. More details
        <a href="http://jacobs-alumni.de/generation-fund/">here</a>.
      </p>
      <p>
        Last but not least, we concluded the elections for two board members, the Treasurer and the Assessor for Content and Membership Management, a new Alumni Board position. The sole candidates for these respective positions won the elections without any problems.
      </p>
      <p>
      <strong>Anna Habighorst</strong> (class of ‘08) won the election for Treasurer with 84 Yes, 4 No and 3 Abstention votes. Similarly, <strong>Philipp Herzberg</strong> (class of ‘12) won the election for Assessor Member and Content Management with 89 Yes, 1 No and 3 Abstention votes.
      </p>
      <p>
        The General Assembly was followed by a short update from the university leadership, Katja Windt and Arvid Kappas.
      </p>
      <p>
        If you missed the GA in person and the livestream on the internet, you have to chance to see the video of the GA on this page.
      </p>

      <hr />

      <h2>IT Tip of the Day</h2>

      <h3>How to check your Alumni Email from an Email Client</h3>

      <p>
        If you’re used to Outlook, Thunderbird, Apple Mail or another email client for checking your e-mail, you don’t need to change your habits for the new Google-hosted Alumni account. Google offers you the ability to connect to their Email servers from any client that supports POP3 or IMAP. In order to find out what the right settings are, please take a look at <a href="https://support.google.com/mail/troubleshooter/1668960?hl=en&amp;ref_topic=3397500">this page</a>.
      </p>

      <h3>Add the Alumni Association public space to your Google Drive</h3>

      <p>
        The Alumni Board tries to be transparent and put as much information at the disposal of Alumni Association Members as possible. Thus, we have published a folder on Google Drive (called the <strong>Alumni Association Public Space</strong>) which is shared with everyone with a @jacobs-alumni.de email address. Inside this folder you will find information about meetings, projects and the latest photos from Homecoming!
      </p>
      <p>
        In order to add this folder to your Google Drive, follow the next steps:
      </p>
      <ol>
        <li>
          Log in to your Alumni Account
        </li>
        <li>
          Open the shared folder by clicking <a href="https://drive.google.com/a/jacobs-alumni.de/folderview?id=0B5YL0usedcxxfkFwQkZxWGpfU1JWNXFESXJ3Qnk2dHJZZTdtaUpOSXN4V1BxZzdFWlRtUVk&amp;usp=drive_web">this link</a>.
        </li>
        <li>
          In the top right corner, click “Open in Drive”
        </li>
        <li>
          Once the folder is open, click “Add to my Drive” from the three dot overflow menu
        </li>
        <li>
          Select the folder in your drive where you want to add it and click move
          <figure>
            <img src="/media/newsletters/2015-11/ittip.jpg" alt="ittip" />
          </figure>
        </li>
        <li>
          You’re done!
        </li>
      </ol>

      <p>
        Now, you should just open your Drive and see the Alumni Association Public Space shared folder.
      </p>

    </article>
  )
}
