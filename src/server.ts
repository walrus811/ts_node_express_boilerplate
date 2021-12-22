import express, { ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import httpErrors, { HttpError } from 'http-errors';
import { formatError, formatMongoError } from './utils/format';
import { MongoError } from 'mongodb';
import { connect } from './db/mongodb';

dotenv.config();
const port = parseInt(process.env.PORT as string) || 3000;
const appName = require('../package.json').name;

const app = express();

app.disable('x-powered-by');
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) =>
{
  res.status(200).send("마이크 테스트");
});

//404
app.use(function RouteNotFound(req, res, next)
{
  next(httpErrors(404, `${req.originalUrl} Can't be Found`));
});

//global error handler
app.use(function HandleErrors(err, req, res, next) 
{
  const resBody = {};
  if (err instanceof HttpError)
  {
    const resBody = {
    } as { message?: string; };

    if (err.expose)
      resBody.message = err.message;
  }
  else if (err instanceof MongoError)
  {
    console.error(formatMongoError(err));
  }

  res.status(err.status || 500);
  res.send(resBody);
} as ErrorRequestHandler);

export async function start()
{
  const url = process.env.MDB_URL;
  try
  {
    if (!url)
    {
      console.error("There's no mdb url, please check server env!");
      return;
    }
    await connect(url, appName);
    app.listen(port, () =>
    {
      console.log(`listening on ${port}`);
    });
  }
  catch (err)
  {
    let message = "";
    if (err instanceof Error)
    {
      message = formatError(err);
    }
    if (err instanceof MongoError)
    {
      console.error(`can't connect the mongod, ${url}`);
      message = formatMongoError(err);
    }
    console.error(message);
  }
}
