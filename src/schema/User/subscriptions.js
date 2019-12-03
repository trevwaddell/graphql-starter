import { GraphQLNonNull } from 'graphql';
import User from './index';

export const newUser = {
  type: GraphQLNonNull(User),
  subscribe: (parent, args, { pubsub }) => {
    return pubsub.asyncIterator('newuser-added');
  },
};
