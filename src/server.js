import { createServer } from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import expressPlayground from 'graphql-playground-middleware-express';

import schema from './schema';
import initializeDB, { redisOptions } from './db';

async function start() {
  const port = process.env.PORT || 4200;
  const mongoUrl =
    process.env.MONGO_CONNECTION_URI || 'mongodb://localhost:27017/practice';
  const app = express();

  try {
    const db = await initializeDB(mongoUrl);

    const httpServer = createServer(app);
    const pubsub = new RedisPubSub(redisOptions);
    const server = new ApolloServer({
      schema,
      context: async () => ({ db, pubsub })
    });

    server.applyMiddleware({ app });

    app.get('/', (req, res) => res.end('GraphQL Api!'));
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

    server.installSubscriptionHandlers(httpServer);

    httpServer.listen({ port }, () => {
      console.log(
        `GraphQL server running on PORT ${port} at: ${server.graphqlPath}`
      );
    });
  } catch (error) {
    console.log(`Error while starting app: ${error}`);
  }
}

start();
