
const c = require('csam/lib/component')

const Link = require('../../uikit/link')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Beitragsordnung</h1>

      <p><strong>§1 Beiträge und Aufnahme in den Verein</strong></p>
      <p>(1) Von den Mitgliedern wird, auf Beschluss der Vereinsversammlung im Jahr 2008/ General§ Assembly 2008, ein Mitgliedsbeitrag erhoben.</p>
      <p>(2) Der Beitrag ist eine Bringschuld. Die Regelverfahren sind der Beitragseinzug mit dem Lastschriftverfahren oder individuelle Überweisung per Bank, Paypal oder andere elektronische Zahlungsanbieter. Der Betrag wird in einem vom Vorstand festzulegenden und zu publizierenden Zeitraum eines jeden Jahres per Lastschriftverfahren abgebucht, wenn das Mitglied sich entschieden hat dieses Zahlungsverfahren zu benutzen. Jedes Mitglied muss in diesem Fall dafür sorgen, dass das Konto ausreichend gedeckt ist, oder vor Ende des Zeitraums auf eine andere, wie oben beschriebene Art, den Beitrag bezahlen. Im Falle von Rücklastschriften wird eine Gebühr von fünf Euro fällig.</p>
      <p>(3) Die jährlichen Beiträge für ordentliche Mitglieder (nach §4.1 der Vereinssatzung) basieren auf drei Kategorien und sehen wie folgt aus:</p>

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
            <td>Kein Beitrag</td>
            <td>39€</td>
            <td>249€</td>
          </tr>
        </tbody>
      </table>

      <p>Jedes Mitglied muss sich eine dieser Kategorien aussuchen, um die Beitragszahlung und die Mitgliedschaft zu vollenden. Alle drei Kategorien ermöglichen das Wahlrecht eines jeden Mitglieds innerhalb des Vereins und den Zugang zur Alumni-Datenbank. Mitgliederkönnen in vorheriger Absprache mit dem Vorstand Beitrags- Kategorien wechseln („upgrading“ bzw. „downgrading“), normalerweise aber mit Beginn des folgenden Beitragjahres. Es ist möglich, die Beitragszahlungen für mehrere Jahre im Voraus zu tätigen. Sobald die Zahlung erfolgt, ist eine Stornierung nicht mehr möglich. Dritte Parteien können einem Mitglied die Mitgliedschaft durch Zahlung der Beiträge ermöglichen.</p>
      <p>(4) Ordentliche Mitglieder dürfen bis zu 2 Jahre nach Graduierung in der ‚Starter‘ Kategorie verbleiben. Mit Ablauf der ersten 2 Jahre werden ordentliche Mitglieder automatisch in die ‚Contributor‘ Kategorie eingestuft. Auf Anfrage wird eine Verlängerung der 2 Jahre ‚Starter‘ Periode um 1 Jahr genehmigt. Dies kann jedes Jahr wiederholt werden, ohne zeitliche Begrenzung.</p>
      <p>(5) Assoziierte Mitglieder nach §4.2 der Vereinsatzung dürfen nur zwischen Kategorien ‚Contributor‘ und ‚Patron‘ wählen, müssen somit einen Beitrag zahlen.</p>
      <p>(6) Ehrenmitglieder nach §4.2 der Vereinsatzung haben keine Beitragspflicht, können jedoch auf Eigeninitiative auch beitragen.</p>
      <p>(7) Über die Höhe der Beiträge für Fördermitglieder, natürliche Personen und juristische Personen entscheidet der Vorstand.</p>

      <p><Link href="/by-laws">See English Version</Link></p>
    </article>
  )
}
