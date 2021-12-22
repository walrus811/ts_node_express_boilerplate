import { MongoClient } from 'mongodb';

export async function connect(url: string, appName: string)
{
  const client = new MongoClient(url, {
    appName
  });
  await client.connect();
  return client;
}

export async function close(client: MongoClient)
{
  await client.close();
}