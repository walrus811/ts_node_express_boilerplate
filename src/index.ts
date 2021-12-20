import express, { ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import httpErrors, { HttpError } from 'http-errors';
import debug from 'debug';

const initDebug = debug("init");

dotenv.config();

const app = express();
const port = parseInt(process.env.PORT as string) || 3000;


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) =>
{
  res.status(200).send("마이크 테스트");
});
app.post('/', (req, res) =>
{
  res.status(200).send("마이크 테스트");
});

//404
app.use(function RouteNotFound(req, res, next)
{
  next(httpErrors(404, `${req.originalUrl} Can't be Found`));
});

//500
app.use(function HandleErrors(err: HttpError, req, res, next) 
{
  const resBody = {
  } as { message?: string; };

  if (err.expose)
    resBody.message = err.message;

  res.status(err.status || 500);
  res.send(resBody);
} as ErrorRequestHandler);
app.listen(port, () => initDebug(`listening on ${port}`));
