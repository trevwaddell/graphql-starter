import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLEnumType,
  GraphQLInputObjectType
} from 'graphql';

const TodoStatus = new GraphQLEnumType({
  name: 'TodoStatus',
  values: {
    COMPLETE: { value: 'COMPLETE' },
    INCOMPLETE: { value: 'INCOMPLETE' }
  }
});

export const TodoInput = new GraphQLInputObjectType({
  name: 'TodoInput',
  description: 'lulz',
  fields: () => ({
    title: {
      type: GraphQLNonNull(GraphQLString)
    },
    status: {
      type: GraphQLNonNull(TodoStatus)
    },
    items: {
      type: GraphQLList(TodoInput)
    }
  })
});

const Todo = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    title: {
      type: GraphQLNonNull(GraphQLString)
    },
    status: {
      type: GraphQLNonNull(TodoStatus)
    },
    items: {
      type: GraphQLList(Todo)
    }
  })
});

export default Todo;

// const Item = new GraphQLObjectType({
//   name: 'Item',
//   title: {
//     type: GraphQLNonNull(GraphQLString)
//   },
//   status:
// });
