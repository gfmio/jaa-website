
import { Schema } from "mongoose";

import { MongoDb } from "../actions/mongodb";

export interface IMongoDbModelProps {
  collectionName?: string;
  id: string;
  idField?: string;
  mongoDb: MongoDb;
  schema: Schema;
  uri?: string;
}

export class MongoDbModelProps implements IMongoDbModelProps {
  public collectionName: string;
  public id: string;
  public idField: string = "_id";
  public mongoDb: MongoDb;
  public schema: Schema;
  public uri: string;

  constructor(props: IMongoDbModelProps) {
    this.id = props.id;
    this.idField = props.idField || this.idField;
    this.uri = props.uri || "/" + this.id.toLowerCase() + "s";
    this.collectionName = props.collectionName || "/" + this.id.toLowerCase() + "s";

    this.mongoDb = props.mongoDb;
    this.schema = props.schema;
  }
}
