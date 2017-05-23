
const c = require('csam/lib/component')

const Link = require('../../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Donate and Support</h1>
      <p>Just like other academic institutions, Jacobs University relies on funds to maintain its standards. Remember how we always wanted better sports facilities, better food in the serveries, fully equipped common rooms, a spruced up party room or a sexy Other Side? Remember how we wished we received more financial aid or how a better loan package would have helped us so much more? Jacobs is constantly challenged with maintain their standards or bettering them. Let us as Alumni give back to this place which we once called home. Every donation, small or big, plays an important role in making Jacobs the place we always wanted it to be.</p>
      <p>Please note the memberships fees go towards administrative costs of the Association. <Link href="https://docs.google.com/presentation/d/19guVw-fBrtHWBJ9Ejq8n73C7wU7zlCMURn943qwlka4/edit?usp=sharing">More information on the contributions model can be found here</Link>. </p>
      <Link class="mwm-aal-item" name="1-pick-a-cause">
      </Link>
      <h2 class="wsite-content-title">
      <strong>
      <span style="color: #24678d; font-size: large;">​(1) Pick a Cause</span>
      </strong>
      </h2>
      <div class="paragraph">Thank you for considering a donation to Jacobs University Foundation of America. Please select one of the causes for your donation to support from the list below:</div>
      <div class="paragraph">
      <ol>
      <li>
      <Link href="/generation-fund">Generation Fund</Link>
      </li>
      <li>
      <Link href="/">General Support of&nbsp;Jacobs University Bremen Alumni Association</Link>
      </li>
      <li>
      <Link href="http://www.jacobs-university-foundation.org/jufa-alumni-scholarship-fund.html">JUFA Alumni Scholarship Fund</Link>
      </li>
      <li>
      <Link href="http://www.jacobs-university-foundation.org/scholarship-funds.html">Claus Halle Scholarship Fund</Link>
      </li>
      <li>
      <Link href="http://www.jacobs-university-foundation.org/events.html">General Support of Jacobs University Foundation of America&nbsp;Annual Fund</Link>
      </li>
      <li>
      <Link href="http://jacobs-university.de/">General Support of Jacobs University</Link>
      </li>
      <li>Other (please specify your preference)</li>
      </ol>
      </div>
      <Link class="mwm-aal-item" name="2-pick-a-payment-method">
      </Link>
      <h2>
      <strong>
      <span style="color: #24678d; font-size: large;">​(2) Pick a Payment Method</span>
      </strong>​</h2>
      <Link class="mwm-aal-item" name="donate-online-to-the-gf">
      </Link>
      <h2>
      <span style="text-decoration: underline;">
      <span style="color: #24678d; font-size: large;">
      <span style="line-height: 27px;">Donate online (to the GF)</span>
      </span>
      </span>
      </h2>
      <p>We want to offer our Alumni an easy and secure way to donate online. That’s why we use PayPal.</p>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input name="cmd" type="hidden" value="_s-xclick" />
      <br/>
      <input name="hosted_button_id" type="hidden" value="5X58QBLPLY8YW" />
      <br/>
      <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://www.paypalobjects.com/en_US/DE/i/btn/btn_donateCC_LG.gif" type="image" />
      <br/>
      <img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" alt="" width="1" height="1" border="0" hidden="" style="display: none !important;" />
      </form>
      <Link class="mwm-aal-item" name="by-bank-transfer-gf-and-aa">
      </Link>
      <h2>
      <span style="text-decoration: underline;">
      <span style="color: #24678d; font-size: large; text-decoration: underline;">By bank transfer (GF and AA)</span>
      </span>
      </h2>
      <Link class="mwm-aal-item" name="bank-details-of-jacobs-university-bremen-alumni-association-ev">
      </Link>
      <h3>Bank Details of Jacobs University Bremen Alumni Association e.V.</h3>
      <p>Beneficiary: Jacobs University Bremen&nbsp;Alumni</p>
      <p>IBAN: DE85 8306 5408 0004 8560 82<br/>
      BIC (SWIFT-Code): GENO DEF1 SLR<br/>
      BLZ (Bankleitzahl): 830 654 08<br/>
      Knt# (Kontonummer): 4856082</p>
      <p>Bank details: Deutsche Skatbank, Zweigniederlassung der VR-Bank Altenburg Land eG,&nbsp;Markt 10,04600 Altenburg</p>
      <Link class="mwm-aal-item" name="bank-details-for-your-donations-directly-into-the-generation-fund">
      </Link>
      <h3>Bank Details for your Donations directly into the Generation Fund!</h3>
      <p>Beneficiary: Jacobs University Bremen Alumni</p>
      <p>Generation Fund Account:<br/>
      IBAN: DE32 8306 5408 0104 8560 82<br/>
      BIC (SWIFT-Code): GENO DEF1 SLR<br/>
      BLZ (Bankleitzahl): 830 654 08<br/>
      Knt# (Kontonummer): 104856082</p>
      <p>Bank details: Deutsche Skatbank, Zweigniederlassung der VR-Bank Altenburg Land eG,&nbsp;Markt 10,04600 Altenburg</p>
      <Link class="mwm-aal-item" name="others">
      </Link>
      <h2>
      <span style="color: #24678d; font-size: large;">
      <span style="line-height: 27px;">
      <u>Others</u>
      </span>
      </span>
      </h2>
      <p>For all other causes, feel free to email us and we will send you the information on how to donate.</p>
    </article>
  )
}
