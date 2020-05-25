import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean
} from 'graphql';
import { ObjectId } from 'mongodb';

import Note, { ItemInput } from './index';
import { NOTES_COLLECTION } from '../../constants';

export const updateNoteText = {
  type: Note,
  args: {
    _id: { type: GraphQLNonNull(GraphQLString) },
    text: { type: GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args, { db }) => {
    const { value } = await db
      .collection(NOTES_COLLECTION)
      .findOneAndUpdate(
        { _id: ObjectId(args._id) },
        { $set: { text: args.text, lastUpdatedAt: new Date() } },
        { returnOriginal: false }
      );
    return value;
  }
};

export const deleteNote = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (parent, args, { db }) => {
    const { deletedCount } = await db
      .collection(NOTES_COLLECTION)
      .deleteOne({ _id: ObjectId(args.id) });

    if (deletedCount) return true;
  }
};

export const updateNoteItems = {
  type: Note,
  args: {
    _id: { type: GraphQLNonNull(GraphQLString) },
    items: { type: GraphQLNonNull(GraphQLList(ItemInput)) }
  },
  resolve: async (parent, args, { db }) => {
    const { value } = await db
      .collection(NOTES_COLLECTION)
      .findOneAndUpdate(
        { _id: ObjectId(args._id) },
        { $set: { items: args.items, lastUpdatedAt: new Date() } },
        { returnOriginal: false }
      );
    return value;
  }
};

export const createNote = {
  type: Note,
  args: {
    text: { type: GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args, { db }) => {
    const { ops } = await db
      .collection(NOTES_COLLECTION)
      .insertOne({ ...args, createdAt: new Date(), lastUpdatedAt: new Date() });

    return ops[0];
  }
};
