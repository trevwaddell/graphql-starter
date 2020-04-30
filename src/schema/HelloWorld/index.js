import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql';

const HelloWorld = new GraphQLObjectType({
  name: 'HelloWorld',
  fields: () => ({
    text: {
      type: GraphQLNonNull(GraphQLString)
    }
  })
});

export default HelloWorld;
