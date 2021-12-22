import { MongoError } from "mongodb";

export function formatError(err: Error) {
  return `name : ${err.name} / message : ${err.message}`;
}

export function formatMongoError(err: MongoError) {
  return `name : ${err.name} / code : ${err.code} / message : ${err.message} / errmsg : ${err.errmsg}`;
}
