import { GraphQLObjectType } from 'graphql';
import * as HelloWorldQuerys from './HelloWorld/queries';
import * as NotesQueries from './Notes/queries';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The Root Query',
  fields: () => ({
    ...HelloWorldQuerys,
    ...NotesQueries
  })
});
