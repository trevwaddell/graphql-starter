import { GraphQLNonNull } from 'graphql';
import Todo, { TodoInput } from './';
import { TODO_COLLECTION } from '../../constants';

export const createTodo = {
  type: Todo,
  args: {
    todo: {
      type: GraphQLNonNull(TodoInput)
    }
  },
  resolve: async (_, args, { db }) => {
    const { ops } = await db.collection(TODO_COLLECTION).insertOne(args.todo);
    const newTodo = ops[0];

    return newTodo;
  }
};
