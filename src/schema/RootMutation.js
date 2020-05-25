import { GraphQLObjectType } from 'graphql';
import * as HelloWorldMutations from './HelloWorld/mutations';
import * as NotesMutations from './Notes/mutations';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: () => ({
    ...HelloWorldMutations,
    ...NotesMutations
  })
});
