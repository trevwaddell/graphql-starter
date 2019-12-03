import { GraphQLNonNull } from 'graphql';
import Helloworld from './index';

export const newHelloWorld = {
  type: GraphQLNonNull(Helloworld),
  subscribe: (parent, args, { pubsub }) => {
    return pubsub.asyncIterator('new-helloworld');
  }
};
