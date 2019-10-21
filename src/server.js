import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "./schema";
import initializeDB from "./db";

const port = process.env.PORT || 4200;
const app = express();

async function start() {
  try {
    const db = await initializeDB();

    app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        context: db,
        graphiql: true
      })
    );
    app.listen(port, () =>
      console.log(`GraphQL server running on PORT ${port}`)
    );
  } catch (error) {
    console.log(`Error while connection to the database: ${error}`);
  }
}

start();
