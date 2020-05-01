require('dotenv').config();

import { MongoClient as mongo } from 'mongodb';

export const configureRedis = env => {
  const { REDIS_DOMAIN_NAME, REDIS_PORT_NUMBER, DOCKER_ENV } = env;

  const host = REDIS_DOMAIN_NAME;
  const port = REDIS_PORT_NUMBER;
  const retryStrategy = times => Math.min(times * 2, 2000);

  if (DOCKER_ENV) {
    return {
      connection: {
        host,
        port,
        retryStrategy
      }
    };
  }
  return {
    host,
    port,
    retryStrategy
  };
};

export default async url => {
  const conn = await mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return conn.db();
};
