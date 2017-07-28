
const passportGoogleOauth20 = require("passport-google-oauth20");

export interface IPassportGoogleStrategy {
  name: string;
  strategy: any;
  authOptions: any;
  callbackOptions: any;
  config: any;
}

export class PassportGoogleStrategy implements IPassportGoogleStrategy {
  public name: string = "google";
  public strategy: any = passportGoogleOauth20.Strategy;
  public authOptions: any = {
    scope: ["profile"],
  };
  public callbackOptions: any = {
    session: false,
  };
  public config: any = {};

  constructor(props: Partial<IPassportGoogleStrategy>) {
    this.name = props.name || this.name;
    this.strategy = props.strategy || this.strategy;
    this.authOptions = {
      ...this.authOptions,
      ...props.authOptions,
    };
    this.callbackOptions = {
      ...this.callbackOptions,
      ...props.callbackOptions,
    };
    this.config = {
      ...{
        callbackURL: process.env.GOOGLE_CALLBACK_URL || "",
        clientID: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      },
      ...props.config,
    };
  }
}

export interface IPassportProps {
  loginBaseUrl: string;
  strategies: any[];
}

export class PassportProps implements IPassportProps {
  public loginBaseUrl: string = "/login";
  public strategies: any[] = [];

  constructor(props: Partial<IPassportProps>) {
    this.loginBaseUrl = props.loginBaseUrl || this.loginBaseUrl;
    this.strategies = props.strategies || this.strategies;
  }
}
