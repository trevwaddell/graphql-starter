import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import Note from './index';
import { NOTES_COLLECTION } from '../../constants';

export const notes = {
  type: GraphQLList(Note),
  resolve: async (parent, args, { db }) =>
    db
      .collection(NOTES_COLLECTION)
      .find()
      .sort({ lastUpdatedAt: -1 })
      .toArray()
};

export const searchNotes = {
  type: GraphQLList(Note),
  args: {
    searchStr: { type: GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args, { db }) =>
    db
      .collection(NOTES_COLLECTION)
      .find({ $text: { $search: args.searchStr } })
      .sort({ lastUpdatedAt: -1 })
      .toArray()
};
