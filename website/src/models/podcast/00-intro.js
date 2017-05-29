
const c = require('csam/lib/component')

module.exports = {
  alias: 'intro',
  title: 'Intro to the podcast',
  date: 'September 16th, 2014',
  guest: {
    title: 'Entrepreneur, Nomad, Podcaster',
    name: 'Sam Harris',
    twitter: '@sam_harris',
    email: null,
    linkedin: null,
    about: "Sam is young entrepreneur and nomad, interested in business, tech, science, travel and health. After constantly tryng to learn everything, travel everywhere, make all the moneys and have as much fun as much as possible all at once, I've started a podcast to learn from the best people I meet."
  },
  Image: '/media/blog/01-heart-jet-lag-title.jpg',
  preview: 'Get to know the biz.',
  content: (
    <div>
      <p>
        When I started at Jacobs in the fall of 2010, our then President, Joachim Treusch, said a few words in his welcome address that stuck with me throughout my entire time as a student there. They went something like this:
      </p>
      <p>
        “99 percent of you will graduate from this university.<br/>
        90 percent of you will fall in love during your time here.<br/>
        10 percent of those relationships will work out.”
      </p>
    </div>
  )
}
