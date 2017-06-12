
const c = require('csam/lib/component')

const Link = require('../../uikit/link')
const EmbedIFrame = require('../../uikit/embed-iframe')
const TabView = require('../../uikit/tab-view')

const applications = {
  2017: {
    lida: {
      applicantName: 'Lida-Maria-Lottko',
      position: 'Assessor PR & Communications',
      description: <p>See her <Link href="https://www.linkedin.com/in/lidamarialottko">LinkedIn profile</Link>.</p>,
      pictureLink: '/media/who-we-are/elections/2017/Profile-picture-300x200.jpg',
      videoLink: 'https://drive.google.com/file/d/0B-Pk-gF-jlVdVW1XMDhLYkpjSHc/preview'
    },
    max: {
      applicantName: 'Max Lohmann',
      position: 'Assessor Event Management',
      description: <p>See his <Link href="https://www.linkedin.com/in/max-lohmann-62440735">LinkedIn profile</Link>.</p>,
      pictureLink: '/media/who-we-are/elections/2017/Max_Lohmann-300x205.png',
      videoLink: 'https://drive.google.com/a/jacobs-alumni.de/file/d/0B5SQg7EnyI03VGxTRjgwS2M3Nzg/preview'
    }
  },
  2016: {
    anne: {
      applicantName: 'Anne Valtink',
      position: 'President',
      description: <p><Link href="https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxX051S21Fa1Q0T252Y1l1RmM5b1MzbG5pUGl3/view?usp=sharing">Read her CV</Link>.</p>,
      pictureLink: '/media/who-we-are/elections/2016/1_Anne2-270x375-216x300.jpg',
      videoLink: 'https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxVVVyMDZ1ODl1cGc/preview'
    },
    stefanR: {
      applicantName: 'Stefan Rustler',
      position: 'Vice-President',
      description: <p><a href="https://ch.linkedin.com/in/stefan-rustler-38ab6135" target="_blank">See his LinkedIn profile.</a></p>,
      pictureLink: '/media/who-we-are/elections/2016/StefanRustler-233x300.jpg',
      videoLink: 'https://drive.google.com/a/jacobs-alumni.de/file/d/0B12tib4CBut4ODJLS0hCUHFXVWs/preview'
    },
    razvan: {
      applicantName: 'Razvan Barabas',
      position: 'Secretary',
      description: <p><a href="https://www.linkedin.com/in/razvanbarabas" target="_blank">See his LinkedIn profile.</a></p>,
      pictureLink: '/media/who-we-are/elections/2016/Razvan_Barabas.jpg',
      videoLink: 'https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxc2JUQnZLRWZpRE0/preview'
    },
    stefanK: {
      applicantName: 'Stefan Kuzmanovski',
      position: 'Treasurer',
      description: <p><a href="https://www.linkedin.com/in/stefankuzmanovski" target="_blank">See his LinkedIn profile.</a></p>,
      pictureLink: '/media/who-we-are/elections/2016/Stefan_Kuzmanovski.jpg',
      videoLink: 'https://drive.google.com/a/jacobs-alumni.de/file/d/0B4xhB110vnKAb280SWdQa2I3WEk/preview'
    },
    annalena: {
      applicantName: 'Anna-Lena Schindl',
      position: 'Assessor Network Development',
      description: <p><a href="https://www.linkedin.com/in/aschindl" target="_blank">See her LinkedIn profile.</a></p>,
      pictureLink: '/media/who-we-are/elections/2016/Anna-LenaSchindl.jpg',
      videoLink: 'https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxRHFpSmJTUmN0RWc/preview'
    },
    frederique: {
      applicantName: 'Frédérique Mittelstaedt',
      position: 'Assessor IT Resources',
      description: <p><a href="https://www.linkedin.com/in/fmittelstaedt" target="_blank">See his LinkedIn profile.</a></p>,
      pictureLink: '/media/who-we-are/elections/2016/Frederique_Mittelstaedt.jpg',
      videoLink: 'https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxT1hSZFA5Y2lqQmM/preview'
    }
  }
}

const election2017Descriptions = [{
  title: 'Assessor for PR & Communications',
  content: <EmbedIFrame format={ 0.777 } src='https://drive.google.com/a/jacobs-alumni.de/file/d/0B8rNJ2excuRGVC1FQkhZR3BHVkE/preview' />
}, {
  title: 'Assessor for Event Management',
  content: <EmbedIFrame format={ 0.777 } src='https://drive.google.com/a/jacobs-alumni.de/file/d/0B8rNJ2excuRGbFVtTUd4bkkyMUk/preview' />
}]

const election2016Descriptions = [{
  title: 'President',
  content: <EmbedIFrame format={ 0.777 } src='https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxLVJRbnRkY1ltV1k/preview' />
}, {
  title: 'Vice President',
  content: <EmbedIFrame format={ 0.777 } src='https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxbHpZUGtzWm9taTQ/preview' />
}, {
  title: 'Secretary',
  content: <EmbedIFrame format={ 0.777 } src='https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxMVdqb3hXb3dlcTA/preview' />
}, {
  title: 'Treasurer',
  content: <EmbedIFrame format={ 0.777 } src='https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxSi1aOE91a0dhQ1U/preview' />
}, {
  title: 'Assessor PR/Communications',
  content: <EmbedIFrame format={ 0.777 } src='https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxS2NTZnRJZnJOS3c/preview' />
}, {
  title: 'Assessor IT Resources',
  content: <EmbedIFrame format={ 0.777 } src='https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxR1JfYjBvYVhydDA/preview' />
}, {
  title: 'Assessor Network Development',
  content: <EmbedIFrame format={ 0.777 } src='https://drive.google.com/a/jacobs-alumni.de/file/d/0B5YL0usedcxxRVdQU005b2tYbHM/preview' />
}]

const ElectionApplication = function(props, children) {
  var props = props || {}
  return (
    <div class="uk-flex uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
      <div class="uk-flex-last@s uk-flex-middle uk-card-media-right uk-cover-container">
          <div class="uk-width-1-1">
            <EmbedIFrame src={ props.application.videoLink } />
          </div>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{ props.application.applicantName }</h3>
          <p>Applicant for { props.application.position }</p>
          { props.application.description }
          <figure>
            <img src={ props.application.pictureLink } style={{ height: String(8 * 1.618) + 'rem', width: 'auto' }} />
          </figure>
        </div>
      </div>
    </div>
  )
}

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Elections</h1>

      <h2>Alumni Board Elections 2017</h2>

      <p>
        The voting for this election has concluded.
      </p>

      <h3>Application for Assessor PR & Communications</h3>
      <ElectionApplication application={ applications["2017"].lida } />

      <h3>Application for Assessor Event Management</h3>
      <ElectionApplication application={ applications["2017"].max } />

      <p>
        Vote for the above candidates here. You can only vote once per registered user. If you don’t see the voting box at this point, you’ve probably voted already :)
      </p>
      <p>
        Voting is open until Sunday, 26th Mar. 2017, 23:59 CEST.
      </p>
      <p>
        If you encounter any issues, please contact <Link href="mailto:support@jacobs-alumni.de">support@jacobs-alumni.de</Link>.
      </p>

      <hr/>

      <h3>Position descriptions</h3>
      <TabView tabNavId="position-descriptions-2017" pages={ election2017Descriptions } />

      <hr/>

      <h2>Alumni Board Elections 2016</h2>

      <p>
        The voting for this election has concluded.
      </p>

      <h3>Application for President</h3>
      <ElectionApplication application={ applications["2016"].anne } />

      <h3>Application for Vice-President</h3>
      <ElectionApplication application={ applications["2016"].stefanR } />

      <h3>Application for Secretary</h3>
      <ElectionApplication application={ applications["2016"].razvan } />

      <h3>Application for Treasurer</h3>
      <ElectionApplication application={ applications["2016"].stefanK } />

      <h3>Application for Assessor Network Development</h3>
      <ElectionApplication application={ applications["2016"].annalena } />

      <h3>Application for Assessor IT Resources</h3>
      <ElectionApplication application={ applications["2016"].frederique } />

      <p>
        Vote for the above candidates here. You can only vote once per registered user. If you don’t see the voting box at this point, you’ve probably voted already :)
      </p>
      <p>
        Voting is open until Friday, 23rd Sept. 2016, 14:00.
      </p>
      <p>
        If you encounter any issues, please contact support@jacobs-alumni.de.
      </p>

      <hr/>

      <h3>Position descriptions</h3>
      <TabView tabNavId="position-descriptions-2016" pages={ election2016Descriptions } />

      <p>
        Apply by email to <a href="mailto:apply@jacobs-alumni.de">apply@jacobs-alumni.de</a>.
      </p>
      <p>
        The application needs to be in the form of a short (max. 3 mins) video clip, explaining your motivation to run, and what ideas you bring to the table (please, do not send the video as an attachment but rather as a Google Drive shared link or any other file-sharing service you prefer to use). It can be accompanied by a max. 1 A4 page document that would help alumni better understand your background (similar to a resume). In addition, you can provide your LinkedIn and/or Xing profile link.
      </p>
      <p>
        NOTE: Your video WILL be cut at 3 minutes if you record beyond this limit!
      </p>
      <p>
        If you have any further questions on the role, the Alumni Board or the Association, please do not hesitate to get in touch with us via <a href="mailto:apply@jacobs-alumni.de">apply@jacobs-alumni.de</a>.
      </p>
    </article>
  )
}
