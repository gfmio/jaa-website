
const nodemailer = require("nodemailer");
const htmlToText = require('nodemailer-html-to-text').htmlToText;

class Mailer {
  constructor(host, port, secure, username, password) {
    super();

    this.transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: secure, // secure:true for port 465, secure:false for port 587
      auth: {
        user: username,
        pass: password
      }
    });

    this.transporter.use('compile', htmlToText(options))

  }

  sendMail(mail, callback) {
    callback = callback || function(error, info) {
      if (error) {
        return console.log(error);
      }

      console.log("Message %s sent: %s", info.messageId, info.response);
    };

    transporter.sendMail(mail, callback);
  }
}

class Mail {
  constructor(from, to, cc, bcc, subject, html, text) {
    this.from = from;
    this.to = to;
    this.cc = cc;
    this.bcc = bcc;
    this.subject = subject;
    this.html = html;
    if (text !== undefined) {
      this.text = text;
    }
  }
}

class EmailTemplate {
  constructor(text) {
  }

  render(data) {

  }
}

// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: "smtp.example.com",
//     port: 465,
//     secure: true, // secure:true for port 465, secure:false for port 587
//     auth: {
//         user: "username@example.com",
//         pass: "userpass"
//     }
// });

// // setup email data with unicode symbols
// let mailOptions = {
//     from: ""Fred Foo 👻" <foo@blurdybloop.com>", // sender address
//     to: "bar@blurdybloop.com, baz@blurdybloop.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world ?", // plain text body
//     html: "<b>Hello world ?</b>" // html body
// };

// send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log("Message %s sent: %s", info.messageId, info.response);
// });

