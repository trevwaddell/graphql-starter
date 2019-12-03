import { GraphQLList } from 'graphql';
import HelloWorld from './index';
import { HELLO_WORLD_COLLECTION } from '../../constants';

export const allHelloWorlds = {
  type: GraphQLList(HelloWorld),
  resolve: async (parent, args, { db }) => {
    return db
      .collection(HELLO_WORLD_COLLECTION)
      .find()
      .toArray();
  }
};
