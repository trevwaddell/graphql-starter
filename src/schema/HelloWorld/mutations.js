import { GraphQLString, GraphQLNonNull } from 'graphql';
import HelloWorld from './index';

export const addHelloWorld = {
  type: HelloWorld,
  args: {
    text: { type: GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args, { db, pubsub }) => {
    const { ops } = await db.collection('practice').insertOne(args);
    const newHelloWorld = ops[0];

    pubsub.publish('new-helloworld', { newHelloWorld });

    return newHelloWorld;
  }
};
