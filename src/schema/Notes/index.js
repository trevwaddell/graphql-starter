import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType
} from 'graphql';
import DateTime from '../DateTime';

export const ItemInput = new GraphQLInputObjectType({
  name: 'ItemInput',
  fields: () => ({
    title: {
      type: GraphQLNonNull(GraphQLString)
    },
    status: {
      type: GraphQLNonNull(GraphQLString)
    }
  })
});

export const Item = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    title: {
      type: GraphQLNonNull(GraphQLString)
    },
    status: {
      type: GraphQLNonNull(GraphQLString)
    }
  })
});

const Note = new GraphQLObjectType({
  name: 'Note',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLString)
    },
    text: {
      type: GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: GraphQLNonNull(DateTime)
    },
    lastUpdatedAt: {
      type: GraphQLNonNull(DateTime)
    },
    items: {
      type: GraphQLList(Item)
    }
  })
});

export default Note;
