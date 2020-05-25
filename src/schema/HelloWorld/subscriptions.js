import { GraphQLNonNull } from 'graphql';
import Helloworld from './index';

export const newHelloWorld = {
  type: Helloworld,
  subscribe: (parent, args, { pubsub }) => {
    return pubsub.asyncIterator('new-helloworld');
  }
};
