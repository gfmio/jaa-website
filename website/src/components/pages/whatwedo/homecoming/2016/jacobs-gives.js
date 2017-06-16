
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">#JacobsGives: Help build funds for future generations</h1>
      <p class="uk-text-lead">
        This homecoming, even if you can’t make it back to campus you can still be a part of making a better future for Jacobs. Donate to either the Generation Fund or the JUFA Alumni Scholarship Fund by September 25, 2016.
      </p>

      <div class="uk-grid uk-child-width-1-2@m" uk-grid>
        <div>
          <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
              <img class="uk-width-1-1" src='/media/what-we-do/homecoming/2016/GF-300x297.jpg' alt='' />
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title"> Generation Fund</h3>
              <ul>
                <li>Self sustainable model for student loans to finance studies at Jacobs</li>
                <li>Yearly fundraising target of 9’000 EUR in the first years, until self sustainable</li>
                <li>Based on merit and need, awarded to students of all nationalities</li>
                <li>Repayment starts once a minimum salary is reached, set at a fixed percentage of their income, for 5 years after graduation</li>
                <li>Self-sustainable after several years through student repayment into the fund</li>
                <li>Managed by the Jacobs Alumni Association</li>
                <li>Tax Deductible for German Citizens</li>
                <li>For more information on the Generation Fund, <a href="/alumni-projects/generation-fund">click here</a>.</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
              <img class="uk-width-1-1" src='/media/what-we-do/homecoming/2016/jacobsgives-square.png' alt='' />
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">JUFA Alumni Scholarship Fund</h3>
              <ul>
                <li>Endowed scholarship fund with a goal to raise $100,000 by 2020</li>
                <li>All scholarships are merit based and available to students from all nationalities</li>
                <li>Sustainable through endowment model where scholarship is only paid out of interest on endowment</li>
                <li>Each dollar donated will be matched, dollar for dollar up to $10,000</li>
                <li>Managed by the Jacobs University Foundation of America</li>
                <li>Tax deductible for US Citizens and Residents</li>
                <li>For more information on the JUFA Alumni Scholarship Fund, <a href="http://www.jacobs-university-foundation.org/jufa-alumni-scholarship-fund.html">click here</a>.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </article>
  )
}


