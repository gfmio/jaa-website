
import http = require("http");
import express = require("express");
import compression = require("compression");
import bodyParser = require("body-parser");

const stripeLib = require("stripe");
const google = require("googleapis");

import mongoose = require("mongoose");
mongoose.Promise = global.Promise;

import { Mailer } from "./helpers/mailer";

import { registerEndpoints } from "./endpoints";

import { performance } from "./helpers/performance";
import { Responders } from "./helpers/responders";

class JaaApiProps {
  public http: {
    host: string;
    port: number
  } = {
    host: process.env.HTTP_HOST || "0.0.0.0",
    port: Number(process.env.HTTP_PORT) || 3001,
  };

  public stripe: {
    secretKey: string;
  } = {
    secretKey: process.env.STRIPE_SECRET_KEY || "sk_test_6G2RAl6CEHIdjOrLc5ulOB8J",
  };

  public mongoDb: {
    host: string,
    port: number,
    database: string,
    username: string | undefined,
    password: string | undefined,
    options: {
      useMongoClient: boolean,
    },
  } = {
    host: process.env.MONGODB_HOST || "localhost",
    port: Number(process.env.MONGODB_PORT) || 27017,
    database: process.env.MONGODB_DATABASE || "test",
    username: process.env.MONGODB_USERNAME || undefined,
    password: process.env.MONGODB_PASSWORD || undefined,
    options: {
      useMongoClient: true,
    },
  };

  public google: {
    clientId: string,
    clientSecret: string,
    redirectUrl: string,
    accessToken: string,
    tokenType: string,
    expiryDate: number
  } = {
    clientId: process.env.GOOGLE_API_CLIENT_ID || "1002114963762-2hpna88s87t7qntgg3sq34rm4f1luoa0.apps.googleusercontent.com",
    clientSecret: process.env.GOOGLE_API_CLIENT_SECRET || "YwAjtTXFPJdgRSc11bT8l4wR",
    redirectUrl: process.env.GOOGLE_API_REDIRECT_URL || "http://localhost:3001/login/google/return",
    accessToken: process.env.GOOGLE_API_ACCESS_TOKEN || 'ya29.GlvPBPPZm1GnPzYVWYjzaNSlyP0I-9ZZCuJwu_j1f4qJetlh0hmdi3anOeCRtxOGXnjXr2m5GKLUZ-2IEhSAz_ACtX5l9SEK9drSKUh0PI3AU4v2F-isSneS2HgL',
    tokenType: process.env.GOOGLE_API_TOKEN_TYPE || 'Bearer',
    expiryDate: Number(process.env.GOOGLE_API_EXPIRY_DATE) || 1506163637666,
  };

  public mailer: {
    host: string,
    port: number,
    secure: boolean,
    username: string,
    password: string
  } = {
    host: process.env.MAIL_HOST || "",
    port: Number(process.env.MAIL_PORT) || 0,
    secure: Boolean(process.env.MAIL_SECURE) || true,
    username: process.env.MAIL_USERNAME || "",
    password: process.env.MAIL_PASSWORD || ""
  };

  public printLog: boolean = Boolean(process.env.PRINT_LOG) || true;
}

export class JaaApi {
  public app: any;
  public httpServer: any;

  public stripe: any;
  public dbConnection: any;
  public google: any;
  public mailer: Mailer;

  private props: JaaApiProps;

  constructor() {
    this.props = new JaaApiProps();
    this.stripe = stripeLib(this.props.stripe.secretKey);
    this.google = google.admin("directory_v1");

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      this.props.google.clientId,
      this.props.google.clientSecret,
      this.props.google.redirectUrl
    );

    oauth2Client.setCredentials({
      access_token: this.props.google.accessToken,
      token_type: this.props.google.tokenType,
      expiry_date: this.props.google.expiryDate
    });

    google.options({
      auth: oauth2Client
    });

    console.log(this.props.mongoDb);

    this.connectMongoDb();
    this.mailer = new Mailer(this.props.mailer);
  }

  public main() {
    this.app = express();
    this.app.use(performance(this));
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(compression());
    this.app.set("x-powered-by", false);

    this.enableCors();

    registerEndpoints(this);

    this.addErrorHandler();
    this.run();
  }

  public addErrorHandler() {
    this.app.all("*", Responders.notFound());
  }

  public enableCors() {
    // Enable CORS
    this.app.use((req: any, res: any, next: any) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    })

    // Enable pre-flight request checks
    this.app.options('*', (req: any, res: any) => {
      // res.header("Access-Control-Allow-Origin", "*");
      // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send();
    });
  }

  public log(s: any) {
    if (this.props.printLog) {
      console.log(s);
    }
  }

  public connectMongoDb() {
    const opts: any = { ...this.props.mongoDb.options, server: { auto_reconnect: false }};
    if (this.props.mongoDb.username !== undefined) {
      opts.user = this.props.mongoDb.username;
    }
    if (this.props.mongoDb.password !== undefined) {
      opts.pass = this.props.mongoDb.password;
    }
    this.dbConnection = mongoose.createConnection(
      this.props.mongoDb.host,
      this.props.mongoDb.database,
      this.props.mongoDb.port,
      opts);
  }

  public run() {
    this.httpServer = http.createServer(this.app);
    this.httpServer.listen(this.props.http.port, this.props.http.host, () => {
      this.log(`App is listening to http://${this.props.http.host}:${this.props.http.port}`);
    });
  }
}
