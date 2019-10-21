import { GraphQLObjectType } from "graphql";
import * as UserMutations from "./User/mutations";

export default new GraphQLObjectType({
  name: "RootMutation",
  description: "The root mutation",
  fields: () => ({
    ...UserMutations
  })
});
