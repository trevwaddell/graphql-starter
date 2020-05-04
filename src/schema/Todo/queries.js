import { GraphQLList } from 'graphql';
import Todo from '.';
import { TODO_COLLECTION } from '../../constants';

export const allTodos = {
  type: GraphQLList(Todo),
  resolve: async (_, args, { db }) => {
    return db
      .collection(TODO_COLLECTION)
      .find()
      .toArray();
  }
};
