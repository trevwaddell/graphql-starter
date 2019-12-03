import { GraphQLString, GraphQLNonNull } from 'graphql';
import User from './index';

export const addUser = {
  type: User,
  name: 'Mutation',
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  resolve: async (_, args, { db, pubsub }) => {
    try {
      const { ops } = await db.collection('practice').insertOne(args);
      const newUser = ops[0];

      pubsub.publish('newuser-added', { newUser });

      return newUser;
    } catch (error) {
      console.log(error);
    }
  },
};

export const updateUser = {
  type: User,
  name: 'Mutation',
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
  },
  resolve: async (_, { id, ...args }, { db }) => {
    const result = await db
      .collection('practice')
      .updateOne(id, { $set: { name: args.name } }, { upsert: true });
  },
};
