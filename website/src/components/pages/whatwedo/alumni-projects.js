
const c = require('csam/lib/component')
const Link = require('../../uikit/link')

const ProjectInfoField = function(props, children) {
  props = props || {}

  const contacts = props.project.contacts.map(function(contact) {
    return (
      <figure class="uk-margin-small-right" style={{ display: 'inline-block' }}>
        <img src={ contact.image } style={{ height: String(6 * 1.618)+'rem' }} />
        <figcaption>{ contact.name }</figcaption>
      </figure>
    )
  })

  return (
    <div>
      <hr />
      <div class="uk-grid uk-grid-small">
        <div class="uk-width-2-3@m">
          <h3>{ props.project.title }</h3>
          <p>{ props.project.description }</p>
        </div>
        <div class="uk-width-1-3@m">
          { contacts }
        </div>
      </div>
    </div>
  )
}

module.exports = function(props, children) {
  var props = props || {}

  const projects = [{
    title: 'Alumni Consulting Initiative',
    description: (
      <p>
        The ACI is one of our most successful projects with a focus on consultancy advice around its ongoing change process. After successful engagements around Student Marketing and Tuition Financing in 2014, the ACI has established itself as a ‘trusted adviser’ to the university leadership. Currently, further involvement in the areas of Financial Literacy, Pricing and Employability are being investigated. Find out more about the ACI and their work <Link href="/alumni-projects/alumni-consulting-initiative">here</Link> and get in touch with Henrik or Axel if you want to become part of the team!
      </p>
    ),
    contacts: [{
      name: 'Henrik',
      image: '/media/what-we-do/alumni-consulting-initiative/henrik2.jpg'
    },{
      name: 'Axel',
      image: '/media/what-we-do/alumni-consulting-initiative/axel.jpg'
    }]
  }, {
    title: 'The Generation Fund',
    description: (
      <p>
        This year we are launching a new redesigned Alumni Scholarship 2.0 – the <Link href="/alumni-projects/generation-fund">Generation Fund</Link>, which has already been kicked off at the Homecoming dinner of Class of ‘04 and ‘09. Its key feature will be <strong>self-sustainability</strong>. While in the past donations have been given once and were “lost” forever afterwards, donations to the Generation Fund are investments in the education of bright Jacobs students who will – in return – prepare the ground for further generations to come. This concept sets up a new pioneering, future-oriented way of funding university studies that will have the potential to revolutionize the current system we all know at Jacobs.
      </p>
    ),
    contacts: [{
      name: 'Elena',
      image: '/media/what-we-do/alumni_board_ElenaIsac-254x300.jpg'
    },{
      name: 'Shinta',
      image: '/media/what-we-do/Shinta.jpg'
    }]
  }, {
    title: 'The Alumni Blog',
    description: (
      <p>
        The Alumni Blog is an initiative of the Alumni Association. The blog thrives through our bloggers, all of which are alumni of Jacobs University Bremen. We hope to enrich our readers’ daily experience with valuable insights from our personal as well as professional lives, ranging from intercultural encounters to management techniques and more. We hope you can learn from us and we from you. Despite being a very young project, a great amount of readers have been attracted to our blog posts so far. We hope to continue being an enriching endeavour and welcome you to contact us at <Link href="mailto:srustler@jacobs-alumni.de">srustler@jacobs-alumni.de</Link>.
      </p>
    ),
    contacts: [{
      name: 'Suna',
      image: '/media/what-we-do/board4-200x300.jpg'
    }]
  }, {
    title: 'Jacobs Alumni Mentoring',
    description: (
      <p>
        (UPCOMING PROJECT) Next year we are planning to launch a new Alumni Mentorship program, that will foster relationships between students and alumni. It will be a unique opportunity for everyone to form meaningful relationships, network and get insights regarding career paths, personal development and general guidance for the early start in the professional life. Stay tuned for more information!
      </p>
    ),
    contacts: [{
      name: 'Elena',
      image: '/media/what-we-do/alumni_board_ElenaIsac-254x300.jpg'
    },{
      name: 'Alina',
      image: '/media/what-we-do/nov6-200x300.jpg'
    }]
  }, {
    title: 'Alumni IT & Infrastructure',
    description: (
      <p>
        tbi
      </p>
    ),
    contacts: [{
      name: 'Frédérique',
      image: '/media/who-we-are/board/fred.jpg'
    }]
  }, {
    title: 'GetTrace – Meet Alumni wherever you go!',
    description: (
      <p>
        tbi
      </p>
    ),
    contacts: [{
      name: 'Daniel',
      image: '/media/what-we-do/nov3-225x300.jpg'
    }]
  }, {
    title: 'Contributions / Fees',
    description: (
      <div>
        <p>
          The Alumni Board’s efforts to establish the association as a self-sufficient and financially independent institution has received strong support from within the association. With almost 30 alumni from various majors and graduating classes, the Alumni Fees Initiative (AFI) aims at designing a sustainable membership model for alumni contributions.
        </p>
        <p>
          We are currently evaluating our crowdsourced feedback and will share the results for further discussion and fine-tuning. Should you be interested in partaking in the process or have any questions, please get in touch with Peter or Suna from the Alumni Board. Expect further news on Alumni Fees soon!
        </p>
      </div>
    ),
    contacts: [{
      name: 'Peter',
      image: '/media/what-we-do/peter_ny-300x197.jpg'
    },{
      name: 'Suna',
      image: '/media/what-we-do/board4-200x300.jpg'
    }]
  }]

  const projectInfoFields = projects.map(function(project){
    return (<ProjectInfoField project={ project } />)
  })

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Alumni Association Projects</h1>
      <p>
        Our association is all about enabling the individual alumni and empowering them to contribute towards our network as well as our Alma Mater. With the commitment to support the university in its educational mission we have various Alumni Projects that promote the exchange and interaction between alumni themselves, their Alma Mater as well as current students.
      </p>
      <p>
        Find out more about our current channels of engagement and see where you can make a difference. Your contribution matters!
      </p>

      { projectInfoFields }
    </article>
  )
}
