import { GraphQLObjectType } from 'graphql';
import * as HelloWorldQueries from './HelloWorld/queries';
import * as TodoQueries from './Todo/queries';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The Root Query',
  fields: () => ({
    ...TodoQueries,
    ...HelloWorldQueries
  })
});
