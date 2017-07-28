
import mongoose = require("mongoose");

import { IMongoDbProps, MongoDbProps } from "../config/mongodb";

export class MongoDb {
  public props: MongoDbProps;

  public connection: mongoose.Connection;

  constructor(props: Partial<IMongoDbProps>) {
    this.props = new MongoDbProps(props);
  }

  public connect() {
    const uri = (((this.props.username !== undefined) && (this.props.password !== undefined)) ?
      `mongodb://${this.props.username}:${this.props.password}@${this.props.host}:${this.props.port}/${this.props.database}` :
      `mongodb://${this.props.host}:${this.props.port}/${this.props.database}`
    );

    // const promise = mongoose.createConnection(uri, this.props.options);
    // promise.then((connection: mongoose.Connection) => {
    //   that.connection = connection;
    // }).catch((err) => {
    //   console.error(err);
    // });
    this.connection = mongoose.createConnection(uri, this.props.options);
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
