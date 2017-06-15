
const c = require('csam/lib/component')
const EmbedIFrame = require('../../components/uikit/embed-iframe')

module.exports = {
  title: 'Leadership Newsletter No. 12 – 20. October 2014',
  date: 'October 20th, 2014',
  author: 'Stefan Anca',
  alias: '/campus-news/02-leadership-newsletter-12',
  titleImage: undefined,
  preview: 'In case you can’t see the embedded PDF, you can open it by clicking this link : Leadership Letter No. 12 – 20. October 2014',
  content: (
    <div>
      <EmbedIFrame src="/media/campus-news/02/Leadership_Letter_12_201014.pdf" />

      <p>
        In case you can’t see the embedded PDF, you can open it by clicking this link: <a href="/media/campus-news/02/Leadership_Letter_12_201014.pdf">Leadership Letter No. 12 – 20. October 2014</a>
      </p>
    </div>
  )
}
