
const c = require('csam/lib/component')

const Link = require('../../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Contributions By-Laws</h1>

      <p><strong>§1 Contributions and admission to the association</strong></p>
      <p>(1) According to the decision made in the General Assembly of 2008, members of the association will contribute a membership fee.</p>
      <p>(2) The contribution is an obligation. The collection of contributions is usually done by direct debit or individual payment via transfer, Paypal or other electronic payment providers. The timeframe by which the contribution is due is determined and announced annually by the Alumni Board. Each member must ensure that their account has sufficient funds in case of direct debit, or decide for another payment method described above. In case of unsuccessful direct debit a fee of five euros will be charged.</p>
      <p>(3) The annual fees for regular members (according to § 4.1 of the Charter) are based on three categories and look like this:</p>

      <table class="uk-table uk-table-divider uk-width-auto">
        <thead>
          <tr>
            <th class="uk-table-shrink">Starter</th>
            <th class="uk-table-shrink">Contributor</th>
            <th class="uk-table-shrink">Patron</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No contribution</td>
            <td>39€</td>
            <td>249€</td>
          </tr>
        </tbody>
      </table>

      <p>Each member must choose one of these categories, in order to complete the payment of contributions and membership. All three categories grant each member the right to vote within the association and access to the alumni database. Members can change the category of contribution (“upgrading” or “downgrading”) in prior consultation with the Board, but usually at the beginning of the following membership year. It is possible to make the contributions for several years in advance. Once a payment is made, a cancellation is no longer possible. Third parties are allowed to pay a member’s contribution.</p>
      <p>(4) Regular members may remain in the ‘Starter’ category up to 2 years after graduation. At the end of the first two years, regular members are then automatically upgraded to the ‘Contributor’ category. Upon request, an extension of the ‘Starter’ period by 1 year may be granted. This can be repeated annually, with no time limit.</p>
      <p>(5) Associated members according to §4.2 of the charter may only choose between categories ‘Contributor’ and ‘Patron’, and must therefore pay a contribution.</p>
      <p>(6) Honorary members according to §4.2 of the charter have no obligation to pay contributions, but may choose to do so at own will.</p>
      <p>(7) The amount of the contribution for supporting members, natural persons and legal entities is set by the Board.</p>

      <p><Link href="/beitragsordnung">Siehe Deutsche Version</Link></p>
    </article>
  )
}
