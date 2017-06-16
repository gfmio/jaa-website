
const c = require('csam/lib/component')

const ImageTile = require('./image-tile')

module.exports = function(props, children) {
  var props = props || {}
  props.images = props.images || []

  var imageTiles = props.images.map(function(url) {
    return <ImageTile src={ url } />
  })

  return (
    <div class="uk-grid uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l" uk-grid>
      { imageTiles }
    </div>
  )
}
