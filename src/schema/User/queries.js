import { GraphQLString, GraphQLNonNull } from 'graphql'
import User from './index'

export const getUser = {
  type: User,
  name: 'Query',
  args: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_, args, db) => {
    return db.collection('practice').findOne(args)
  },
}
