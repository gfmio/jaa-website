
const c = require('csam/lib/component')

const TabView = require('../../uikit/tab-view')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Generation Fund – a new Alumni Scholarship 2.0</h1>

      <p>
        This year we are launching a new redesigned Alumni Scholarship 2.0 – the<strong> Generation Fund</strong>, which has already been kicked off at the Homecoming dinner of Class of ‘04 and ‘09. Its key feature is <strong>self-sustainability</strong>.
      </p>

      <figure class="uk-text-center">
        <img src="/media/what-we-do/GF-300x297.jpg" alt="GF" height="250" />
      </figure>

      <p>
        While in the past donations have been given once and were “lost” forever afterwards, donations to the Generation Fund are investments in the education of bright Jacobs students who will – in return – prepare the ground for further generations to come. This concept sets up a new pioneering, future-oriented way of funding university studies that will have the potential to revolutionize the current system we all know at Jacobs.
      </p>
      <p>
        The design stage is ready, currently setting up the new structure. The Alumni Board together with the university are still working on the legal aspects of the fund. Nonetheless, all money donated to this cause will go towards the students, in the new set up or alternative ones. Until ready – we will keep fundraising!
      </p>

      <div class="uk-card uk-card-default uk-width-medium uk-margin-bottom" style={{ margin: '0 auto' }}>
        <div class="uk-card-body">
          <h3 class="uk-card-title">DONATE TO THE GENERATION FUND!</h3>
          <p>
            Help us reach the fundraising goal for this year!
          </p>
          <p>
            Make a gift. Make a difference!
          </p>

          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input name="cmd" type="hidden" value="_s-xclick" />
            <input name="hosted_button_id" type="hidden" value="5X58QBLPLY8YW" />
            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://www.paypalobjects.com/en_US/DE/i/btn/btn_donateCC_LG.gif" type="image" />
            <img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" alt="" width="1" height="1" border="0" />
          </form>
        </div>
      </div>

      <TabView tabNavId="generation-fund-info" pages={ [{
        title: 'Infographic',
        content: (
          <figure>
            <img src="/media/what-we-do/GF-infographic_updated.jpg" alt="GF infographic_updated" width="1200" height="2397" />
          </figure>
        )
      }, {
        title: 'Donate now!',
        content: (
          <div>
            <h2>DONATE DIRECTLY TO THE GENERATION FUND!</h2>
            <p>
              We encourage you to support the next generations of Jacobs students through gifts made to the Alumni Generation Fund. All contributions will go directly towards the studies of future students!
            </p>
            <p>
              You can easily contribute by using your credit card online!
            </p>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input name="cmd" type="hidden" value="_s-xclick" />
              <input name="hosted_button_id" type="hidden" value="5X58QBLPLY8YW" />
              <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://www.paypalobjects.com/en_US/DE/i/btn/btn_donateCC_LG.gif" type="image" />
              <img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" alt="" width="1" height="1" border="0" />
            </form>

            <p>
              Alternatively, you can make a transfer using the following Bank details.
            </p>
            <p>
              Beneficiary: Jacobs University Bremen Alumni
            </p>
            <p>
              Generation Fund Account:<br/>
              IBAN: DE32 8306 5408 0104 8560 82<br/>
              BIC (SWIFT-Code): GENO DEF1 SLR<br/>
              BLZ (Bankleitzahl): 830 654 08<br/>
              Knt# (Kontonummer): 104856082
            </p>
            <p>
              Bank details: Deutsche Skatbank, Zweigniederlassung der VR-Bank Altenburg Land eG, Markt 10,04600 Altenburg
            </p>
          </div>
        )
      }, {
        title: 'Background information',
        content: <div>
          <h2>Background information</h2>

          <p>
            The idea of an Alumni Scholarship originated at the five-year reunion of the Class of 2004, who wanted to donate to an individual who would carry on the pioneering spirit of the class. This idea was further undertaken in the following years, on behalf of Alumni who felt strongly committed to contribute.
          </p>
          <p>
            This year, we are taking one further step, and introducing a new redesigned Alumni Scholarship – the <b>Generation Fund</b>, which has already been kicked off at the Homecoming dinner of Class of ‘04 and ‘09. Its key feature is self-sustainability.
          </p>
          <p>
            The idea to initiate the Generation Fund originated from the Alumni Consulting Initiative (ACI), who has been working on various projects offering consulting support to the university. The “Reversed Generation Commitment” (Umgekehrter Generationenvertrag) has already been successfully introduced in most of the German private universities where it has been designed as an alternative to student loans and as a way for Alumni to stay involved with the university community. Some of us have graduated one, two, others even ten years ago – but we all share the same Jacobs spirit, no matter where we are in the world. This bond makes us want to give back and get involved, which will be possible through the Generation Fund.
          </p>
          <h3>
            How does it work?
          </h3>
          <p>
            The scholar selected will be awarded a loan of 9’000 EUR for the full duration of their studies, that will go on top of other scholarships or grants they would have already received from the university. Upon graduation, he/she is free to pursue any path desired, and later on – upon obtaining the first full-time job and once a minimum gross salary/year is reached, the scholar will start repayment into the fund for a fixed period of time = 5 years x fixed % of gross salary (dependent on the loan). This structure, compared to bank loans or tuition postponements, enables students to choose the career that really fits their passions, as they would not be forced to take jobs with high salaries in order to repay student loans. Also in order to ensure fairness to the student, the maximum repayment into the fund will be capped.
          </p>
          <p>
            Gradually, the fund grows, and the bigger it gets – more scholars  will be able to benefit from it. The repayment terms are transparent, and will be kept the same for all scholarship holders.
          </p>
          <h3>
            What next?
          </h3>
          <p>
            The Generation Fund concept was introduced at Homecoming ’15 for the first time. Currently, the Alumni Board, together with Jacobs University and the ACI are preparing the set up and structure, in order to be ready for the launch as soon as possible!
          </p>
          <h3>
            Disclaimer
          </h3>
          <p>
            As it is a new set up, the Alumni Board together with the university are still working on the legal aspects of the fund. Nonetheless, all money donated to this cause will go towards the students, in the new set up or alternative ones. Until ready – we will keep fundraising.
          </p>
          <p>
            If you want to contribute to the Generation Fund, you can do that anytime, just follow the instructions on the left side panel or on the <a href="https://jacobs-alumni.de/donate/">donation information page</a> <em>(*)</em>.
          </p>
          <p>
            <em>(*) please note that there is a separate account dedicated to the “Generation Fund” </em>
          </p>
        </div>
      }] } />
    </article>
  )
}
