const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const ThreadType = new GraphQLObjectType({
  name: 'ThreadType',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString },
  },
});

module.exports = ThreadType;
