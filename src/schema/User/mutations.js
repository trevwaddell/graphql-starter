import { GraphQLString, GraphQLNonNull } from "graphql";
import User from "./index";

export const addUser = {
  type: User,
  name: "Mutation",
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  },
  resolve: async (_, args, db) => {
    const { ops } = await db.collection("practice").insertOne(args);
    return ops[0];
  }
};

export const updateUser = {
  type: User,
  name: "Mutation",
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString }
  },
  resolve: async (_, { id, ...args }, db) => {
    const result = await db
      .collection("practice")
      .updateOne(id, { $set: { name: args.name } }, { upsert: true });
  }
};
