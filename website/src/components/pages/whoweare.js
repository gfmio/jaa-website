
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Who we are</h1>

      <div class="uk-grid" uk-grid>
        <div class="uk-width-1-2@s">
          <figure class="slideshow" on={{ show: function(e) { console.log('abc'); } }} >
            <img class="active" src="/media/who-we-are/almalink_graduation.jpg" />
            <img src="/media/who-we-are/almalink_consulting.jpg" />
            <img src="/media/who-we-are/almalink_scholarships_3.jpg" />
          </figure>
        </div>
        <div class="uk-width-1-2@s">
          <p>
            The Jacobs University Bremen Alumni Association e.V. is an independent non-profit organization dedicated to establishing and maintaining Jacobs University’s student community following the time of study at the University. The association encourages and actively promotes the life-long evolution of relationships within and among the successive class cohorts of Jacobs University students. Through the organization of social, professional academic and other events, the Alumni Association pledges itself to the growth of a multicultural and international social network.
          </p>
          <p>
            The Alumni Association is also interested in establishing close relationships with individuals who have a serious interest in the University and fostering its ideals. The association commits itself to support the University as it seeks to fulfill its educational mission for the current generation and for future generations of students. In addition, the association ensures the exchange and interaction between the alumni and its alma mater aimed at promoting their mutual benefit.
          </p>
        </div>
      </div>
      <div class="uk-grid" uk-grid>
        <div class="uk-width-auto@m">
          <figure>
            <img src="/media/logo.jpg" />
          </figure>
        </div>
        <div class="uk-width-expand@m">
          <h2>Our mission</h2>

          <p>
            “The Alumni Association is a valued partner in the development of Jacobs University;we employ the entrepreneurial spirit of our alumni to shape the future of the university and foster engagement of alumni amongst themselves and with their Alma mater.”
          </p>

          <h2>Our identity</h2>

          <p>
            The new Alumni Association logo builds on the symbolism already present in the Jacobs University logo, and adds a distinctive alumni dimension to it, depicting the global reach and the unique connection of the alumni and the university.
          </p>
          <p>
            The individual elements of the logo represent the global stage where our alumni make their impact, the continents of the world, centered around Europe and Bremen, where each of our stories began.
          </p>
          <p>
            Portrayed as puzzle parts of one element, they symbolize the unique Jacobs spirit that connects the alumni amongst themselves and with their Alma mater, no matter where they are. Maintaining and developing these connections is one of the key roles of the Alumni Association.
          </p>
          <p>
            By enclosing the university logo from all sides, they symbolize our commitment to nurture, shape and protect the university and its future.
          </p>
          <p>
            In addition to these, the core of elements of Jacobs University’s logo remain as valid for the alumni, as they are for the university and it’s students.
          </p>
          <p>
            The globe symbolizes the global orientation of Jacobs University: it prepares graduates from all over the world for “global citizenship” and „global responsibility“; graduates who take on social responsibility and make a contribution to finding solutions for the global challenges of the 21st century.
          </p>
          <p>
            The »I« is a commitment to the international and intercultural life of the campus community, to innovation and interactivity within all areas of campus life as well as to the independence of research, teaching and management. Last but not least the »I« is a commitment of Jacobs University to its successful beginning as »International University Bremen«.
          </p>
          <p>
            The »J« is an appreciation of the founder family and the extraordinary engagement of the Swiss Jacobs Foundation.
          </p>
          <p>
            Please note: Jacobs Alumni Association Logo is the property of the Jacobs Alumni Association e.V. Explicit written permission is required to use the logo in any situation.
          </p>
          <p>
            For a Style Guide on permissible uses of the logo, please contact the Jacobs University Alumni Association.
          </p>
        </div>
      </div>
    </article>
  )
}
