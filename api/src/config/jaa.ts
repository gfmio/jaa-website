
import { HttpProps, IHttpProps } from "./http";
import { HttpsProps, IHttpsProps } from "./https";
import { IMongoDbProps, MongoDbProps } from "./mongodb";
import { IPassportProps, PassportProps } from "./passport";
import { IRedisProps, RedisProps } from "./redis";

export interface IJaaApiProps {
  http: IHttpProps | Partial<IHttpProps>;
  https: IHttpsProps | Partial<IHttpProps>;
  mongoDb: IMongoDbProps | Partial<IMongoDbProps>;
  passport: IPassportProps | Partial<IPassportProps>;
  redis: IRedisProps | Partial<IRedisProps>;

  printLog: boolean;
}

export class JaaApiProps implements IJaaApiProps {
  public http: HttpProps;
  public https: HttpsProps;
  public mongoDb: MongoDbProps;
  public passport: PassportProps;
  public redis: RedisProps;
  public printLog: boolean = true;

  constructor(props: Partial<IJaaApiProps>) {
    this.http = new HttpProps(props.http || {});
    this.https = new HttpsProps(props.https || {});
    this.mongoDb = new MongoDbProps(props.mongoDb || {});
    this.passport = new PassportProps(props.passport || {});
    this.redis = new RedisProps(props.redis || {});

    this.printLog = props.printLog || this.printLog;
  }
}
