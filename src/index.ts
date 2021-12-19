import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT;
import bodyParser from 'body-parser';
app.use(express.json());
app.use(express.urlencoded());
console.log("hi");
app.get('/', (_, res) =>
{
  res.status(200).send("마이크 테스트");
});
app.post('/', (req, res) =>
{
  res.status(200).send("마이크 테스트");
});

app.listen(port, () => console.log(`listening on ${port}`));