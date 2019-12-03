import { GraphQLObjectType } from 'graphql';
import * as UserSubscriptions from './User/subscriptions';

export default new GraphQLObjectType({
  name: 'RootSubscription',
  description: 'The Root Subscription',
  fields: () => ({
    ...UserSubscriptions,
  }),
});
