
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Imprint / Impressum</h1>

      <p>
        Jacobs University Bremen Alumni Association e.V.<br/>
        Campus Ring 1<br/>
        28759 Bremen<br/>
        Deutschland
      </p>
      <p>
        <a href="mailto:board@jacobs-alumni.de">board@jacobs-alumni.de</a><br/>
        <a href="http://www.jacobs-alumni.de/">www.jacobs-alumni.de</a>
      </p>
      <p>
        Jacobs University Bremen Alumni Association e.V. ist ein gemeinnütizger Verein.
      </p>
      <p>
        President: Peter Dabrowski<br/>
        Vize-President: Daniel Alonso<br/>
        Schatzmeister: Anna Rebecca Habighorst<br/>
        Schriftführer: Stefan Anca<br/>
        Beisitzer: Stefan Rustler, Elena Isac, Alina Degtiarova, Philipp Herzberg<br/>
      </p>
      <p>
        Handelsregister<br/>
        Amtsgericht Bremen, HRB 18117<br/>
        Steuer-Nr. 60 145 14056<br/>
      </p>

      <h2>Haftungshinweis</h2>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.<br/>
      </p>

      <h2>Informationen zum Copyright</h2>
      <p>
        Der Inhalt dieser Webseiten ist urheberrechtlich geschützt. Alle Abbildungen und Fotos auf den Webseiten der Jacobs University Bremen Alumni Association e.V. dürfen nicht ohne Genehmigung übernommen, vervielfältigt und verbreitet werden.<br/>
      </p>

      <h2>Verwendung pseudonymer Nutzerprofile zu Werbezwecken</h2>
      <p>
        Diese Website benutzt Google Universal Analytics, einen Webanalysedienst der Google Inc. (Google) Google Analytics verwendet sog. Cookies, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google Inc. in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
      </p>
    </article>
  )
}
