const graphql = require('graphql');
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
