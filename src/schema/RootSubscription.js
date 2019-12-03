import { GraphQLObjectType } from 'graphql';
import * as HelloWorldSubscriptions from './HelloWorld/subscriptions';

export default new GraphQLObjectType({
  name: 'RootSubscription',
  description: 'The Root Subscription',
  fields: () => ({
    ...HelloWorldSubscriptions
  })
});
