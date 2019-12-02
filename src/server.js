import express from 'express';
import expressPlayground from 'graphql-playground-middleware-express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import initializeDB from './db';

async function start() {
  const port = process.env.PORT || 4200;
  const app = express();

  try {
    const db = await initializeDB();
    const server = new ApolloServer({
      schema,
      context: async () => {
        return { db };
      },
    });

    app.get('/', (req, res) =>
      res.end('GraphQL Server! use the ui at /graphql')
    );
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

    server.applyMiddleware({ app });

    app.listen(port, () =>
      console.log(`GraphQL server running on PORT ${port}`)
    );
  } catch (error) {
    console.log(`Error while starting app: ${error}`);
  }
}

start();
