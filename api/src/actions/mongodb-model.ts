
import { Document } from "mongoose";

import { IMongoDbModelProps, MongoDbModelProps } from "../config/mongodb-model";

export class MongoDbModel<I extends Document> {
  public props: MongoDbModelProps;
  public model: any;

  constructor(props: IMongoDbModelProps) {
    this.props = new MongoDbModelProps(props);
    this.model = this.props.mongoDb.connection.model<I>(this.props.id, this.props.schema);
  }
}
