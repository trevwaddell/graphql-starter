import { GraphQLObjectType } from 'graphql'
import * as UserQuerys from './User/queries'

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The Root Query',
  fields: () => ({
    ...UserQuerys,
  }),
})
