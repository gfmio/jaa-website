import fs = require("fs");
import http = require("http");
import https = require("https");

import express = require("express");
import compression = require("compression");
import bodyParser = require("body-parser");

import { IJaaApiProps, JaaApiProps } from "./config/jaa";

import mongoose = require("mongoose");
mongoose.Promise = global.Promise;

import { MongoDb } from "./actions/mongodb";
import { MongoDbModel } from "./actions/mongodb-model";

import { Passport } from "./actions/passport";

import { Google } from "./actions/google";

// const JWTRedisSession = require("jwt-redis-session");
// import redis = require("redis");

// import { JsonResponse } from "./actions/json-response";
import { performance } from "./helpers/performance";
import { DbResponders, HttpVerb, Responders } from "./helpers/responders";

import { CatSchema, ICatModel } from "./models/cat";

const stripeLib = require("stripe");

// MISC

// MAIN

export class JaaApi {
  public props: JaaApiProps;

  public app: any;
  public httpServer: any | undefined;
  public httpsServer: any | undefined;
  public mongoDb: MongoDb;
  public passport: Passport;
  public google: Google;

  constructor(props: Partial<IJaaApiProps>) {
    this.props = new JaaApiProps(props);
    // console.log(this.props);
    // console.log(this.props.stripe);
  }

  public main() {
    this.app = express();
    this.app.use(performance);
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(compression());
    this.app.set("x-powered-by", false);

    // MISC 2

    this.passport = new Passport(this.props.passport);
    this.passport.attach(this.app);

    this.google = new Google();
    // this.google.addUser({
    //   name: {
    //     givenName: "Peter",
    //     familyName: "Pan",
    //   },
    // });

    // const redisClient = redis.createClient(this.props.redis);
    // const secret = "crypto cat";

    // this.app.use(JWTRedisSession({
    //   client: redisClient,
    //   secret: secret,
    //   keyspace: "sess:",
    //   maxAge: 86400,
    //   algorithm: "HS256",
    //   requestKey: "jwtSession",
    //   requestArg: "jwtToken",
    // }));

    // this.app.post("/session", (req: any, res: any) => {
    //   req.jwtSession.user = undefined;
    //   req.jwtSession.key = "value";

    //   const claims = {
    //     aud: "jacobs-alumni.de",
    //     iss: "jacobs alumni",
    //   };
    //   req.jwtSession.create(claims, (error: any, token: any) => {
    //     if (error) {
    //       (new JsonResponse({ statusCode: 400, errors: [ error ], result: { token } })).send(res);
    //     } else {
    //       (new JsonResponse({ statusCode: 200, errors: [], result: { token } })).send(res);
    //     }
    //   });
    // });

    // this.app.get("/session", (req: any, res: any) => {
    //   // console.log(req.jwtSession.id, req.jwtSession.toJSON());
    //   res.status(200).json(req.jwtSession.toJSON());
    // });

    // this.app.delete("/session", (req: any, res: any) => {
    //   req.jwtSession.destroy((error: any) => {
    //     if (error) {
    //       (new JsonResponse({ statusCode: 401, errors: [ error ], result: {} })).send(res);
    //     } else {
    //       (new JsonResponse({ statusCode: 200, errors: [ ], result: {} })).send(res);
    //     }
    //   });
    // });

    // Regular

    // this.mongoDb = new MongoDb(this.props.mongoDb);
    // this.mongoDb.connect();

    // const Cat = new MongoDbModel<ICatModel>({
    //   id: "Cat",
    //   mongoDb: this.mongoDb,
    //   schema: CatSchema,
    // });

    // DbResponders.attach(this.app, Cat, true, HttpVerb.get);
    // DbResponders.attach(this.app, Cat, true, HttpVerb.post);

    this.app.post("/buy-hc2017-tickets", (req: any, res: any) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      // console.log(req.body);

      const token = req.body.stripeToken || "";
      const email = req.body.email || "";
      const tickets = {
        basicAmount: Number(req.body["tickets[basicAmount]"]) || 0,
        halfAmount: Number(req.body["tickets[halfAmount]"]) || 0,
        fullAmount: Number(req.body["tickets[fullAmount]"]) || 0,
        brunchAmount: Number(req.body["tickets[brunchAmount]"]) || 0,
      };

      // console.log(token, tickets);

      const calcPrice = (ticketModel: any) => {
        return ticketModel.basicAmount * 15 +
               ticketModel.halfAmount * 45 +
               ticketModel.fullAmount * 75 +
               ticketModel.brunchAmount * 8.50;
      };

      const ticketStrings = [];
      if (tickets.basicAmount > 0) {
        ticketStrings.push(tickets.basicAmount.toString() + "x Basic");
      }
      if (tickets.halfAmount > 0) {
        ticketStrings.push(tickets.halfAmount.toString() + "x Half");
      }
      if (tickets.fullAmount > 0) {
        ticketStrings.push(tickets.fullAmount.toString() + "x Full");
      }
      if (tickets.brunchAmount > 0) {
        ticketStrings.push(tickets.brunchAmount.toString() + "x Brunch Only");
      }
      const chargeDescription = "Homecoming tickets \n(" + ticketStrings.join(", ") + ")";

      const apiKey = this.props.stripe.secretKey;
      const stripe = stripeLib(apiKey);

      const chargeObj = {
        amount: calcPrice(tickets) * 100,
        currency: "eur",
        description: chargeDescription,
        receipt_email: email,
        source: token,
      };

      stripe.charges.create(chargeObj, (err: any, charge: any) => {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json({});
          // res.status(200).json(charge);
        }
      });
    });

    this.addErrorHandler();
    this.run();
  }

  public addErrorHandler() {
    this.app.all("*", Responders.notFound());
  }

  public run() {
    this.runHttpServer();
    this.runHttpsServer();
  }

  public runHttpServer() {
    if (this.props.http.enabled) {
      this.httpServer = http.createServer(this.app);
      this.httpServer.listen(this.props.http.port, this.props.http.host, () => {
        if (this.props.printLog) {
          console.log(`App is listening to http://${this.props.http.host}:${this.props.http.port}`);
        }
      });
    }
  }

  public runHttpsServer() {
    if (this.props.https.enabled) {
      const options = {
        cert: String(fs.readFileSync(this.props.https.certificateFile)),
        key: String(fs.readFileSync(this.props.https.privateKeyFile)),
      };

      this.httpsServer = https.createServer(options, this.app);
      this.httpsServer.listen(this.props.https.port, this.props.https.host, () => {
        if (this.props.printLog) {
          console.log(`App is listening to https://${this.props.https.host}:${this.props.https.port}`);
        }
      });
    }
  }
}
