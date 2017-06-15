
const c = require('csam/lib/component')
const EmbedIFrame = require('../../components/uikit/embed-iframe')

module.exports = {
  title: 'Leadership Newsletter No. 13 – 11. November 2014',
  date: 'November 13th, 2014',
  author: 'Stefan Anca',
  alias: '/campus-news/03-leadership-newsletter-letter13',
  titleImage: undefined,
  preview: 'In case you can’t see the embedded PDF, you can open it by clicking this link : Leadership Letter No. 12 – 20. October 2014',
  content: (
    <div>
      <EmbedIFrame src="/media/campus-news/03/Leadership_Letter_13_111114.pdf" />

      <p>
        In case you can’t see the embedded PDF, you can open it by clicking this link: <a href="/media/campus-news/03/Leadership_Letter_13_111114.pdf">Leadership Letter No. 13 – 11. November 2014</a>
      </p>
    </div>
  )
}
