
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}
  props.keywords = props.keywords || []
  props.description = props.description || ''

  return <html>
    <head>
      <meta charset="utf-8" />
      <title>{ props.title }</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width" />

      <meta name="description" content={ props.description } />
      <meta name="keywords" content={ props.keywords.join(',') } />

      <link href="/css/style.css" media="all" rel="stylesheet" />
      <link rel="icon" type="image/png" href="/media/favicon.png" />
      <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet" />
    </head>
    <body>
      { children }
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" async></script>
      <script src="/js/uikit.min.js" type="text/javascript" async></script>
      <script src="/js/uikit-icons.min.js" type="text/javascript" async></script>
      <script src="/js/app.js" type="text/javascript" async></script>
      <script type="text/javascript" src="js/ga.js" async></script>
    </body>
  </html>
}
