
const c = require('csam/lib/component')

// {
//   name: "Philipp Herzberg",
//   role: "Member and Content Management",
//   photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/cut-300x199.png",
//   meta: {
//     email: "adegtiarova@jacobs-alumni.de",
//     facebook: "https://www.facebook.com/alina.degtiareva",
//     twitter: "https://twitter.com/alinadegtiarova"
//   },
//   description: (
//     <p>
//       Philipp graduated from Jacobs with an B.Sc. in Neurobiology and Cognitive Psychology in 2012. As an Assessor for Assessor for Member and Content Management at the Alumni Board he is working on growing the alumni association members, keeping personal information updated and aiding with the Jacobs blog.
//     </p>
//   )
// },

boardMembers = [{
  name: "Anne Valtink",
  role: "President",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/Anne_Valtink-198x300.jpg",
  meta: {
    email: "avaltink@jacobs-alumni.de"
  },
  description: (
    <p>
      Anne (’13) is currently working as a strategy consultant in Munich. After graduating from Jacobs with a BA in Global Economics and Management, she continued to do her Master’s at WHU Otto Beisheim School of Management. At Jacobs, she was involved in founding JSC, rowing, and organizing the graduation ball. She believes that the Jacobs spirit of living together in an internationally diverse community does not stop with graduation, but that the Jacobs Alumni Association can offer you part of your home away from home anywhere in the world! Her favorite “Jacobs moment” was when she met a current Kruppie at a streetfood stand in Shanghai.
    </p>
  )
}, {
  name: "Stefan Rustler",
  role: "Vice President",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/StefanRustler-233x300.jpg",
  meta: {
    email: "srustler@jacobs-alumni.de",
    facebook: "https://www.facebook.com/stefan.rustler",
    twitter: "https://twitter.com/RustlerStefan",
    linkedin: "https://www.linkedin.com/pub/stefan-rustler/35/b61/38a"
  },
  description: (
    <p>
      Stefan (’12) has been involved with the Alumni Association since his election as Class Representative 2012. After working on the regional development of the Association as well as head-organizing the annual Homecomings, he took up the role as Vice-President. Stefan graduated from Jacobs with a BSc in Physics and finished his MSc in Physics at the Chair of Entrepreneurial Risks at ETH Zurich. Currently, he is working for Accenture Digital in Zurich in the field of Big Data Analytics.
    </p>
  )
}, {
  name: "Răzvan Barabaș",
  role: "Secretary",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/16c6116.jpg",
  meta: {
    email: "srustler@jacobs-alumni.de",
    facebook: "https://www.facebook.com/stefan.rustler",
    twitter: "https://twitter.com/RustlerStefan",
    linkedin: "https://www.linkedin.com/pub/stefan-rustler/35/b61/38a"
  },
  description: (
    <p>
      Fresh out of Jacobs, Razvan (‘16) is the youngest member of the Board. On top of keeping everyone up to date with campus gossip, he is in charge of implementing project management solutions and keeping everyone on track with their tasks. He’s also responsible for meeting management, organizing elections, and the General Assembly during Homecoming. As part of his gap year, he is currently working in Luxembourg for Amazon and is flirting with the idea of heading back to Germany for his Master’s degree. Razvan graduated with a BA in Global Economics and Management and dedicated his years at Jacobs to rowing, BEaMS and JSC.
    </p>
  )
}, {
  name: "Max Lohmann",
  role: "Event Management",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/Max_Lohmann-300x205.png",
  meta: {
    email: "mlohmann@jacobs-alumni.de"
  },
  description: (
    <p>
      Max (’12) is based in Berlin working for GIZ, the German agency for international development cooperation. He recently joined a team advising the German G20 Presidency. Max graduated from Jacobs with a BA in Integrated Social Sciences and got a Master’s Degree in International Relations and Economics from the Johns Hopkins University’s School of Advanced International Studies in Washington, D.C. Also, Max is the proud co-owner of Pulse Express, Jacobs University’s on-campus convenience and groceries store. He joined the Alumni Board in the fall of 2016. As Assessor for Event Management he is the head-organizer of the annual alumni Homecomings.
    </p>
  )
}, {
  name: "Elena Isac",
  role: "Special Projects",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/alumni_board_ElenaIsac1-e1428571775592-300x199.jpg",
  meta: {
    email: "eisac@jacobs-alumni.de",
    facebook: "http://facebook.com/ele.isac",
    twitter: "https://twitter.com/IsacElena",
    instagram: "https://instagram.com/nutzic/",
    linkedin: "https://www.linkedin.com/pub/elena-isac/16/996/7bb"
  },
  description: (
    <p>
      Elena (’11) graduated in 2011 with a BSc in International Logistics Engineering. She is currently working as a Supply Chain Analyst for Barry Callebaut , in Zurich. She joined the board in 2014 as Assessor for Special Projects, and will be focusing on the Generation Fund project, as well as developing other ventures for Alumni. Previously Elena has worked for the Alumni Office during her undergraduate studies, coordinated the Logistics Chain Club for Alumni after graduation and has been strongly involved in the Jacobs campus life as a student – all of which shape her strong determination to contribute to the development of the Jacobs Alumni worldwide network.
    </p>
  )
}, {
  name: "Lida-Maria Lottko",
  role: "PR and Communications",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/Profile-picture-300x200.jpg",
  meta: {
    email: "llottko@jacobs-alumni.de",
    facebook: "https://www.facebook.com/lidamaria.lottko",
    linkedin: "https://uk.linkedin.com/in/lidamarialottko"
  },
  description: (
    <p>
      Lida graduated from Jacobs with a B.Sc. in Biochemistry and Cell Biology in 2012. Lida is the founder of social business BECAUSE. and consults and trains FTSE100s, NGOs and startups in design thinking and digital innovation. As the Alumni Board’s head of PR &amp; Communication she makes sure you’re in the know about what’s happening in the Jacobs community (on campus and beyond the bubble).
    </p>
  )
}, {
  name: "Anna-Lena Schindl",
  role: "Network Development",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/Anna-LenaSchindl-242x300.jpg",
  meta: {
    email: "aschindl@jacobs-alumni.de",
    facebook: "https://www.facebook.com/annalena.schindl",
    twitter: "https://twitter.com/annalena_s",
    linkedin: "https://de.linkedin.com/in/aschindl"
  },
  description: (
    <p>
      Anna-Lena graduated from Jacobs in 2012 with a BSc in Physics. A love for innovation, design and entrepreneurship brought her to Silicon Valley where she received a MSc from Stanford University in Management Science and Engineering in 2015. She has since returned to Europe and is currently working within the startup ecosystem in Stockholm. As Assessor for Network Development, she will support all initiatives related to strengthening and creating new connections between alumni all around the globe. Most importantly by supporting the local chapters to be a home away from home for the Jacobs community.
    </p>
  )
}, {
  name: "Stefan Kuzmanovski",
  role: "Finances",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/stefan-linkedin-pic-300x300.jpg",
  meta: {
    email: "skuzmanovski@jacobs-alumni.de ",
    facebook: "https://www.facebook.com/stefan.kuzmanovski92",
    linkedin: "https://www.linkedin.com/in/stefankuzmanovski"
  },
  description: (
    <p>
      Stefan Kuzmanovski (JUB ’14) is a technical program manager at Tesla in Palo Alto, California. Prior to joining Tesla he earned his Master of Environmental Management at the Yale School of Forestry and Environmental Studies. At Jacobs University he pursued a dual degree in Earth and Space Sciences and Integrated Environmental Studies. He was involved with the Environmental Club and was a Student Assistant in the Nordmetall College Office for 2 years. Stefan is excited to help develop and grow the Alumni Association as well as provide value to the Association’s members worldwide.
    </p>
  )
}, {
  name: "Frédérique Mittelstaedt",
  role: "Information Technology",
  photoUrl: undefined,
  meta: {
    email: "fred@jacobs-alumni.de",
    facebook: "https://www.facebook.com/gfmio",
    twitter: "https://twitter.com/gfmio",
    instagram: "https://www.instagram.com/gfmio",
    linkedin: "https://www.linkedin.com/in/fmittelstaedt"
  },
  description: (
    <p>
      ABC
    </p>
  )
}]

advisors = [{
  name: "Dr. Christian Jacobs",
  role: "Managing Partner Joh. Jacobs & Co. (AG & Co.) KG, Hamburg/Honorary Chairman, Jacobs Foundation, Zurich/Vice Chairman of the Jacobs University Board of Governors",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/board11.jpg",
  meta: {},
  description: (
    <div>
      <p>
        Johann Christian Jacobs is the oldest son of entrepreneur and Jacobs University’s name patron Klaus J. Jacobs and has led Jacobs Foundation involvment in Jacobs University ever since the commitment of Jacobs Foundation of 200 million euros in 2006.
      </p>
      <p>
        After growing up in Bremen, he is now a lawyer and entrepreneur based in Hamburg as managing partner of Joh. Jacobs &amp; Co. (AG &amp; Co.) KG, a company having become known for successful investments in companies such as Infront Sports &amp; Media, CeWe Color Holding AG and Hemro AG.
      </p>
      <p>
        Since 2001 he took over various positions within the Jacobs family group, from 2001 – 2004 as Chairman of Jacobs Holding, being the investment company invested in Barry Callebaut AG, Adecco S.A. and Infront Sports &amp; Media, and from 2004 – 2015 as Chairman of the Jacobs Foundation, one of the largest private foundations in Europe, based in Zurich (Switzerland). He became its Honorary Chairman in 2015.
      </p>
      <p>
        Besides his vice chairmanship on the Board of Governors of Jacobs University Bremen, he is also a board member of the German Council on Foreign Relations, a think-tank for German foreign policy, Board of Trustees of the Society of Friends of Bayreuth eV and a member of the Senate of Berlin-Brandenburg Academy of Sciences and the acatech – German academy of technology.
      </p>
    </div>
  )
}, {
  name: "Prof. Dr. Karen Smith Stegen",
  role: "KAEFER Professor of Renewable Energy and Environmental Politics / Research Fellow at the Bremer Energie Insitute",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/karen_smithstegen_toned-down_February-13_20152.jpg",
  meta: {},
  description: (
    <div>
      <p>
        Professor Dr. Karen Smith Stegen is the KAEFER Chair of Renewable Energy and Environmental Politics. She holds an international MBA (1989) and was the Senior International Affairs Analyst at Amoco Corporation in Chicago, Illinois (1989-1995). Prior to obtaining her Ph.D. in Political Science from Northwestern University in 2008, she was awarded fellowships from both the Fulbright Commission and the German Academic Exchange Service (DAAD). She was an adjunct faculty member of Universität Heidelberg and Schiller International University (2008-2009) and a senior researcher with the Bremer Energie Institut (2009-2011).
      </p>
      <p>
        At Jacobs University, Prof. Dr. Smith Stegen teaches courses on social movements, sustainability, energy and environmental policy and politics, and international relations. She is one of the founders of the Integrated Environmental Studies undergraduate program and is the coordinator of the Energy Policy &amp; Technology specialization. Prof. Dr. Smith Stegen has published in Energy Policy, Risk Management, Energy Conversion and Management, the Journal of Transatlantic Studies, the Journal of Eurasian Studies, and the International Journal of Emerging Markets. She is frequently a featured speaker at conferences and has been called upon to provide expertise to policy makers, including the European Presidency.
      </p>
    </div>
  )
}, {
  name: "Prof. Dr. Ronny Wells",
  role: "President of the Board of Directors of the Jacobs Foundation of America / Distinguished Professor of Mathematics",
  photoUrl: "http://old.jacobs-alumni.de/wp-content/uploads/2015/03/board12.jpg",
  meta: {},
  description: (
    <div>
      <p>
        Raymond O. WELLS, Jr., received his Ph.D. degree from the Courant Institute of Mathematical Sciences at New York University in 1965 and thereafter had a 35-year career as a mathematics professor at Rice University in Houston. He is the recipient of Fulbright, Guggenheim, and Alexander von Humboldt awards, and is a fellow of the AAAS. In 1970-71 and in 1979-80 he was a Visiting Member at the Institute for Advanced Study in Princeton, and he was a Visiting Professor at Brandeis, Paris, Oxford, Colorado, and Bremen.
      </p>
      <p>
        From 1998 to 2001 Wells was in Bremen working on the creation of International University Bremen. He was Vice-President for External Affairs and Professor of Mathematics at IUB from 2001-2005. In 2005 was appointed Distinguished Professor of Mathematics. He was the President of the Carl-Schurz Deutsch-Amerikanischer Club in Bremen from 2002-2010.
      </p>
      <p>
        He is currently the President of the Jacobs University Foundation of America, based in Boulder, Colorado, and is a Member of the Board of the Jacobs University Alumni &amp; Friends Stiftung GmbH in Bremen.
      </p>
    </div>
  )
}]

const AlumniBoardMemberTile = function(props, children) {
  props = props || {}
  props.member = props.member || {}
  props.member.meta = props.member.meta || {}
  props.member.meta.email = props.member.meta.email || undefined
  props.member.meta.facebook = props.member.meta.facebook || undefined
  props.member.meta.twitter = props.member.meta.twitter || undefined
  props.member.meta.instagram = props.member.meta.instagram || undefined
  props.member.meta.linkedin = props.member.meta.linkedin || undefined

  return (
    <div class="uk-card uk-card-default">
      { props.member.photoUrl != undefined ?
      <div class="uk-card-media-top square-box">
        <img style={{ height: 'auto' }} class="uk-width-1-1 square-content" src={ props.member.photoUrl } alt={ props.member.name } />
      </div>
      : '' }
      <div class="uk-card-body">
        <h3 class="uk-card-title">{ props.member.name }</h3>
        <p class="uk-article-meta">{ props.member.role }</p>
        <div>
          <ul class="inline nolisticon">
            { props.member.meta.email != undefined ?
            <li class="uk-margin-small-right">
              <a class="uk-icon-button bg-mediumgrey" href={ 'mailto:' + props.member.meta.email }>
                <svg fill="#FFFFFF" stroke="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="mail" ratio="1">
                <polyline fill="none" points="1.4,6.5 10,11 18.6,6.5"></polyline><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path></svg>
              </a>
            </li>
            : '' }

            { props.member.meta.facebook != undefined ?
            <li class="uk-margin-small-right">
              <a class="uk-icon-button bg-facebook" target="_blank" href="https://www.facebook.com/jacobsalumni">
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="facebook" ratio="1">
                  <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                </svg>
              </a>
            </li>
            : '' }

            { props.member.meta.twitter != undefined ?
            <li class="uk-margin-small-right">
              <a class="uk-icon-button bg-twitter" target="_blank" href="https://twitter.com/JacobsAlumni">
              <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="twitter" ratio="1">
                <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74">
                </path>
              </svg>
              </a>
            </li>
            : '' }

            { props.member.meta.instagram != undefined ?
            <li class="uk-margin-small-right">
              <a class="uk-icon-button bg-instagram" target="_blank" href="https://www.instagram.com/jacobsalumni/">
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="instagram" ratio="1">
                  <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                  <circle cx="14.87" cy="5.26" r="1.09"></circle>
                  <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                </svg>
              </a>
            </li>
            : '' }

            { props.member.meta.linkedin != undefined ?
            <li class="">
              <a class="uk-icon-button bg-linkedin" target="_blank" href="https://www.linkedin.com/groups/77362/profile">
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="linkedin" ratio="1">
                  <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path>
                  <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path>
                </svg>
              </a>
            </li>
            : '' }
          </ul>
        </div>

        { props.member.description }
      </div>
    </div>
  )
}

boardMemberTiles = boardMembers.map(function(member) {
  return (
    <div>
      <AlumniBoardMemberTile member={ member } />
    </div>
  )
})

advisorTiles = advisors.map(function(member) {
  return (
    <div>
      <AlumniBoardMemberTile member={ member } />
    </div>
  )
})

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Jacobs Alumni Association Board</h1>
      <p class="uk-text-lead">
        The board is composed of 10 members and 3 advisors. The board acts as a bridge between the university, alumni and our community to facilitate networking and influence in the decision making process at Jacobs.
      </p>

      <h2></h2>

      <div class="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m " uk-grid>
        { boardMemberTiles }
      </div>

      <h2>Associate Advisors to the Board</h2>
      <div class="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m " uk-grid>
        { advisorTiles }
      </div>
    </article>
  )
}
