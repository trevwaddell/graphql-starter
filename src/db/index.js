require('dotenv').config();

import { MongoClient as mongo } from 'mongodb';

const url = process.env.MONGO_CONNECTION_URI || 'mongodb://localhost:27017';

export default async () => {
  const conn = await mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return conn.db();
};
