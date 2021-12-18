import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (_, res) =>
{
  res.status(200).send("마이크 테스트");
});
app.listen(port, () => console.log(`listening on ${port}`));