require('dotenv').config();

import { MongoClient as mongo } from 'mongodb';

export default async url => {
  const conn = await mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return conn.db();
};
