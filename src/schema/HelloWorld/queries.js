import { GraphQLList } from 'graphql';
import HelloWorld from './index';

export const allHelloWorlds = {
  type: HelloWorld,
  resolve: async (parent, args, { db }) => {
    return db
      .collection('practice')
      .find()
      .toArray();
  }
};
