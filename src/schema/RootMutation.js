import { GraphQLObjectType } from 'graphql';
import * as HelloWorldMutations from './HelloWorld/mutations';
import * as TodoMutations from './Todo/mutations';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: () => ({
    ...HelloWorldMutations,
    ...TodoMutations
  })
});
