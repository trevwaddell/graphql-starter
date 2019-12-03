import { GraphQLObjectType } from 'graphql';
import * as HelloWorldQuerys from './HelloWorld/queries';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The Root Query',
  fields: () => ({
    ...HelloWorldQuerys
  })
});
