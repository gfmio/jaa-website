
const nodemailer = require("nodemailer");
const htmlToText = require('nodemailer-html-to-text').htmlToText;

export interface IMailerProps {
  host: string,
  port: number,
  secure: boolean,
  username: string,
  password: string
}

export class Mailer {
  protected transporter: any;

  constructor(props: IMailerProps) {
    // super();

    // this.transporter = nodemailer.createTransport({
    //   host: props.host,
    //   port: props.port,
    //   secure: props.secure, // secure:true for port 465, secure:false for port 587
    //   auth: {
    //     user: props.username,
    //     pass: props.password
    //   }
    // });
    this.transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
    });

    this.transporter.use('compile', htmlToText())
  }

  sendMail(mail: Mail, callback: any) {
    callback = callback || function(error: any, info: any) {
      if (error) {
        return console.log(error);
      }

      console.log("Message %s sent: %s", info.messageId, info.response);
    };

    this.transporter.sendMail(mail, callback);
  }
}

export interface IMailProps {
  from: string,
  to: string[],
  cc?: string[],
  bcc?: string[],
  subject: string,
  html: string,
  text?: string
}

export class Mail {
  public from: string;
  public to: string[];
  public cc: string[];
  public bcc: string[];
  public subject: string;
  public html: string;
  public text: string | undefined;

  constructor(props: IMailProps) {
    this.from = props.from;
    this.to = props.to;
    this.cc = props.cc || [];
    this.bcc = props.bcc || [];
    this.subject = props.subject;
    this.html = props.html;
    this.text = props.text;
  }
}

// export class EmailTemplate {
//   constructor(text: any) {
//   }

//   render(data) {

//   }
// }

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

