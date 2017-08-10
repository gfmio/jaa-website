
export interface IMongoDbProps {
  host: string;
  port: number;
  database: string;
  username: string | undefined;
  password: string | undefined;
  options: any;
}

export class MongoDbProps implements IMongoDbProps {
  public host: string = "localhost";
  public port: number = 27017;
  public database: string = "test";
  public username: string | undefined = undefined;
  public password: string | undefined = undefined;
  public options: any = {
    useMongoClient: true,
  };

  constructor(props: Partial<IMongoDbProps>) {
    this.host = props.host || process.env.MONGODB_HOST || this.host;
    this.port = props.port || Number(process.env.MONGODB_PORT) || this.port;
    this.database = props.database || process.env.MONGODB_DATABASE || this.database;
    this.username = props.username || process.env.MONGODB_USERNAME || this.username;
    this.password = props.password || process.env.MONGODB_PASSWORD || this.password;
    this.options = { ...this.options, ...(props.options || {}) };
  }
}
