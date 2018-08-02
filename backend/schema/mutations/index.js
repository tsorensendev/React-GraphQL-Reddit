const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

// Auth mutations
const auth = require('./auth/auth_mutations');
const { signup, login, logout } = auth;

// Thread mutations
const thread = require('./thread/thread_mutations');
const { newThread, editThread, deleteThread } = thread

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup,
    login,
    logout,
    newThread,
    editThread,
    deleteThread,
  },
});

module.exports = mutation;
