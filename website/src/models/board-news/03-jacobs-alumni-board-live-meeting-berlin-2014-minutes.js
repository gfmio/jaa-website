
const c = require('csam/lib/component')
const EmbedIFrame = require('../../components/uikit/embed-iframe')

module.exports = {
  title: 'Jacobs Alumni Board Meeting Berlin December 2014 – Minutes',
  date: 'January 29th, 2015',
  author: 'Stefan Anca',
  alias: '/board-news/03-jacobs-alumni-board-live-meeting-berlin-2014-minutes',
  titleImage: undefined,
  preview: 'In case you can’t see the embedded PDF, you can open it by clicking this link : Jacobs Alumni Board Meeting Berlin December 2014 – Minutes',
  content: (
    <div>
      <EmbedIFrame format={ 0.777 } src='/media/board-news/JAB_meeting_minutes_December_2014.pdf' />
      <p>
        In case you can’t see the embedded PDF, you can open it by clicking this link : <a href="/media/board-news/JAB_meeting_minutes_December_2014.pdf">Jacobs Alumni Board Meeting Berlin December 2014 – Minutes</a>
      </p>
    </div>
  )
}
