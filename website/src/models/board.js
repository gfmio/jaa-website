
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

members = [{
  name: "Anne Valtink",
  role: "President",
  photoUrl: "/media/who-we-are/board/Anne_Valtink-198x300.jpg",
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
  photoUrl: "/media/who-we-are/board/StefanRustler-233x300.jpg",
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
  photoUrl: "/media/who-we-are/board/16c6116.jpg",
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
  photoUrl: "/media/who-we-are/board/Max_Lohmann-300x205.png",
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
  photoUrl: "/media/who-we-are/board/alumni_board_ElenaIsac1-e1428571775592-300x199.jpg",
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
  photoUrl: "/media/who-we-are/board/Profile-picture-300x200.jpg",
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
  photoUrl: "/media/who-we-are/board/Anna-LenaSchindl-242x300.jpg",
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
  photoUrl: "/media/who-we-are/board/stefan-linkedin-pic-300x300.jpg",
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
  photoUrl: "/media/who-we-are/board/fred.jpg",
  meta: {
    email: "fred@jacobs-alumni.de",
    facebook: "https://www.facebook.com/gfmio",
    twitter: "https://twitter.com/gfmio",
    instagram: "https://www.instagram.com/gfmio",
    linkedin: "https://www.linkedin.com/in/fmittelstaedt"
  },
  description: (
    <p>
      tbi
    </p>
  )
}]

advisors = [{
  name: "Dr. Christian Jacobs",
  role: "Managing Partner Joh. Jacobs & Co. (AG & Co.) KG, Hamburg/Honorary Chairman, Jacobs Foundation, Zurich/Vice Chairman of the Jacobs University Board of Governors",
  photoUrl: "/media/who-we-are/board/board11.jpg",
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
  photoUrl: "/media/who-we-are/board/karen_smithstegen_toned-down_February-13_20152.jpg",
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
  photoUrl: "/media/who-we-are/board/board12.jpg",
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

module.exports = {
  members: members,
  advisors: advisors
}
