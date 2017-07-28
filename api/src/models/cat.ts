
import mongoose = require("mongoose");

export interface ICat {
  name: string;
}

export interface ICatModel extends ICat, mongoose.Document { }

export const CatSchema = new mongoose.Schema({
  name: String,
});
