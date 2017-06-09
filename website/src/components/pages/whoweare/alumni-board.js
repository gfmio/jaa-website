
const c = require('csam/lib/component')

const board = require('../../../models/board')

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
              <a class="uk-icon-button bg-facebook" target="_blank" href={ props.member.meta.facebook }>
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="facebook" ratio="1">
                  <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                </svg>
              </a>
            </li>
            : '' }

            { props.member.meta.twitter != undefined ?
            <li class="uk-margin-small-right">
              <a class="uk-icon-button bg-twitter" target="_blank" href={ props.member.meta.twitter }>
              <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" icon="twitter" ratio="1">
                <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74">
                </path>
              </svg>
              </a>
            </li>
            : '' }

            { props.member.meta.instagram != undefined ?
            <li class="uk-margin-small-right">
              <a class="uk-icon-button bg-instagram" target="_blank" href={ props.member.meta.instagram }>
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
              <a class="uk-icon-button bg-linkedin" target="_blank" href={ props.member.meta.linkedin }>
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

boardMemberTiles = board.members.map(function(member) {
  return (
    <div>
      <AlumniBoardMemberTile member={ member } />
    </div>
  )
})

advisorTiles = board.advisors.map(function(member) {
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
