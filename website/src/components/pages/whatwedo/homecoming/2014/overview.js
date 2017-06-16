
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  // Title image: http://old.jacobs-alumni.de/sites/default/files/homecoming2014.png
  // http://old.jacobs-alumni.de/sites/default/files/Homecoming_2014FINAL.pdf

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Homecoming 2014, 5 Year Reunion Class of 2009 & 10 Year Reunion Class of 2004</h1>
      <p>
        We're Coming Home Again!!
      </p>
      <p>
        For the first time Homecoming will unite the celebration of a 10 year reunion (class of 2004 – the pioneers!!!) and a 5 year reunion (class of 2009 – the first class to join “Jacobs University”!). Let’s go back to campus, see old friends, share our newest stories and reminisce about our university days. So don’t wait – register now & plan your trip immediately!
      </p>
      <p>
        <strong>Details:</strong>
      </p>
      <ul>
        <li>Dates:  19th – 21st September, 2014</li>
        <li>Schedule of Events :  Download PDF</li>
        <li>Accommodation: See below</li>
        <li>Facebook Event (being marked as “Going” on Facebook does not serve as the formal RSVP – for that please use the form below): <a href="https://www.facebook.com/events/1431475920435390">Link</a></li>
        <li>Frequently Asked Questions :  Homecoming FAQs</li>
      </ul>

      <h2>Accomodation</h2>

      <p>
        <strong>The following Accomodation options are available for Homecoming 2014:</strong>
      </p>
      <p>
        <strong>Campus Guesthouse:</strong> If you want to book a room in the guest house, please <a href="/sites/default/files/Pricelist_Guesthouse.pdf">download the price list</a> and send your reservation to guesthouse@jacobs-university.de
      </p>
      <p>
        <strong>Colleges:</strong> The number of rooms available in the colleges is not available yet. The earliest date will be hopefully mid of August.
      </p>
      <p>
        <strong>Hotels:</strong> The university pre reserved some rooms in Hotel Atlantik and Hotel Strandlust with special conditions.
      </p>

      <p>
        <strong>Atlantic Hotel:</strong><br/>
        Reservation keyword: Homecoming 2014<br/>
        Single room 79,20€ per night including breakfast buffet<br/>
        Double room 103,50€ per night including breakfast buffet<br/>
        Please send your reservation until August 15 to vegesack@atlantic-hotels.de
      </p>
      <p>
        <strong>Strandlust Vegesack:</strong><br/>
        Single room 96,50€ per night; parking, breakfast buffet and drinks from Minibar included<br/>
        Double room 140,00€ per night; parking, breakfast buffet and drinks from Minibar included<br/>
        Please send your reservation until August 22 to info@strandlust.de
      </p>
      <p>
        To find other hotels in Bremen, please click here <a href="http://m.jacobs-university.de/graduation2014/visitors-info-accommodation/">http://m.jacobs-university.de/graduation2014/visitors-info-accommodation/</a>.
      </p>
    </article>
  )
}
