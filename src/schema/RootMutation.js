import { GraphQLObjectType } from 'graphql';
import * as HelloWorldMutations from './HelloWorld/mutations';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: () => ({
    ...HelloWorldMutations
  })
});
