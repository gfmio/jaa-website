
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return <html>
    <head>
      <meta charset="utf-8" />
      <title>{ props.title }</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width" />

      <meta name="description" content="..." />
      <meta name="keywords" content="..." />

      <link href="/css/style.css" media="all" rel="stylesheet" />
      <link rel="icon" type="image/png" href="/media/favicon.png" />
    </head>
    <body>
      { children }
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" async></script>
      <script src="/js/uikit.min.js" type="text/javascript" async></script>
      <script src="/js/uikit-icons.min.js" type="text/javascript" async></script>
      <script src="/js/app.js" type="text/javascript" async></script>
    </body>
  </html>
}
