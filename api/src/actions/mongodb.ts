
import mongoose = require("mongoose");

import { IMongoDbProps, MongoDbProps } from "../config/mongodb";

export class MongoDb {
  public props: MongoDbProps;

  public connection: mongoose.Connection;

  constructor(props: Partial<IMongoDbProps>) {
    this.props = new MongoDbProps(props);
  }

  public connect() {
    // const uri = (((this.props.username !== undefined) && (this.props.password !== undefined)) ?
    //   `mongodb://${this.props.username}:${this.props.password}@${this.props.host}:${this.props.port}/${this.props.database}/` :
    //   `mongodb://${this.props.host}:${this.props.port}/${this.props.database}/`
    // );

    // console.log(uri);

    // const promise = mongoose.createConnection(uri, this.props.options);
    // promise.then((connection: mongoose.Connection) => {
    //   that.connection = connection;
    // }).catch((err) => {
    //   console.error(err);
    // });

    const opts = { ...this.props.options,  server: { auto_reconnect: false }};
    if (this.props.username !== undefined) {
      opts.user = this.props.username;
    }
    if (this.props.password !== undefined) {
      opts.pass = this.props.password;
    }
    this.connection = mongoose.createConnection(this.props.host, this.props.database, this.props.port, opts);

    // this.connection = mongoose.createConnection(uri, this.props.options);
    // let promise;
    // promise = mongoose.createConnection(uri, this.props.options);
    // promise.then((connection: mongoose.Connection) => {
    //   this.connection = connection;
    // }).catch((err: any) => {
    //   console.error(err);
    // });

  }
}

// export interface IResult {
//   status: string;
//   result: any;
//   messages: [];
// }

// export class MongoDbModel {
//   public model: any;

//   constructor(model: any) {
//     this.model = model;
//   }

//   public search(
//     filter: any = {},
//     columns: string[] = [],
//     limit: number = 0,
//     offset: number = 0,
//     sort: any = {}): MongoDbQuery {
//     this.model.find(filter, columns, {
//       limit,
//       skip: offset,
//       sort,
//     }, (err: any, results: any[]) => {
//       let r: IResult = {};
//       if (err) {
//         r = {
//           messages: [ err ],
//           result: results,
//           status: "success",
//         };
//         return r;
//       } else {
//         r = {
//           messages: [ err ],
//           result: {},
//           status: "fail",
//         };
//         return r;
//       }
//     });
//   }
// }
