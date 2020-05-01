require('dotenv').config();

import { MongoClient as mongo } from 'mongodb';

export const redisOptions = {
  host: process.env.REDIS_DOMAIN_NAME,
  port: process.env.REDIS_PORT_NUMBER,
  retryStrategy: times => Math.min(times * 50, 2000)
};

export default async url => {
  const conn = await mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return conn.db();
};
