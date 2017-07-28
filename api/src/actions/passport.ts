
import passport = require("passport");

import { JsonResponse } from "./json-response";
import { IPassportProps, PassportProps } from "../config/passport";

export class Passport {
  public props: PassportProps;

  constructor(props: Partial<IPassportProps>) {
    this.props = new PassportProps(props);
  }

  public attach(app: any) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, cb) => {
      console.log("serialising user", user);
      cb(null, user);
    });

    passport.deserializeUser((obj, cb) => {
      console.log("deserialising user", obj);
      cb(null, obj);
    });

    for (const strategyConfig of this.props.strategies) {
      console.log(strategyConfig);
      passport.use(new strategyConfig.strategy(strategyConfig.config,
        (accessToken: any, refreshToken: any, profile: any, cb: any) => {
          // In this example, the user's Facebook profile is supplied as the user
          // record.  In a production-quality application, the Facebook profile should
          // be associated with a user record in the application's database, which
          // allows for account linking and authentication with other identity
          // providers.
          console.log("login success?!", accessToken, refreshToken, profile);
          return cb(null, profile);
        }));

      const authUrl = this.props.loginBaseUrl + "/" + strategyConfig.name;
      const callbackUrl = authUrl + "/return";

      app.get(authUrl, passport.authenticate(strategyConfig.name, strategyConfig.authOptions));
      app.get(callbackUrl, passport.authenticate(strategyConfig.name, strategyConfig.callbackOptions),
        (req: any, res: any) => {
          (new JsonResponse({ statusCode: 200, errors: [], result: {} })).send(res);
        });
    }
  }
}
