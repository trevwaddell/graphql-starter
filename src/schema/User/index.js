import { GraphQLObjectType, GraphQLString } from "graphql";

const User = new GraphQLObjectType({
  name: "User",
  description: "type User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
});

export default User;
