const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

// Auth mutations
const auth = require('./auth/auth_mutations');
const { signup, login, logout } = auth;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup,
    login,
    logout,
  },
});

module.exports = mutation;
