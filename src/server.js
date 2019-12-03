import { createServer } from 'http';
import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';

import schema from './schema';
import initializeDB from './db';

async function start() {
  const port = process.env.PORT || 4200;
  const app = express();

  try {
    const db = await initializeDB();

    const httpServer = createServer(app);
    const pubsub = new PubSub();
    const server = new ApolloServer({
      schema,
      context: async () => ({ db, pubsub })
    });

    server.applyMiddleware({ app });

    app.get('/', (req, res) => res.end('GraphQL Api!'));
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

    server.installSubscriptionHandlers(httpServer);

    httpServer.listen({ port }, () => {
      console.log(`GraphQL server running on PORT ${server.graphqlPath}`);
    });
  } catch (error) {
    console.log(`Error while starting app: ${error}`);
    // maybe add retry logic
  }
}

start();
