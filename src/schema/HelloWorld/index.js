import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const HelloWorld = new GraphQLObjectType({
  name: 'HelloWorld',
  fields: () => ({
    text: {
      type: GraphQLNonNull(GraphQLString)
    }
  })
});

export default HelloWorld;
