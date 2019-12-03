import { GraphQLSchema } from 'graphql';

import RootQuery from './RootQuery';
import RootMutation from './RootMutation';
import RootSubscription from './RootSubscription';

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
  subscription: RootSubscription,
});

export default schema;
