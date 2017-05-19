const execFile = require('child_process').execFile;
const express = require('express')

const port = process.env.UPDATER_PORT || 7999

const app = express()

app.post('/', function(req, res) {
  res.status(200).send('')
  execFile('./update.sh', options={ cwd: '..' }, function(error, stdout, stderr) {
    console.log( 'exec complete' );
  });
})

const server = app.listen(port, function(){})
