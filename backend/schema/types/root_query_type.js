const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');
const mongoose = require('mongoose');
const Thread = mongoose.model('thread');


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    currentUser: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
    allThreads: {
      type: new GraphQLList(ThreadType),
      resolve() {
        return Thread.find({});
      },
    },
    oneThread: {
      type: ThreadType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Thread.findById(id);
      },
    },
  },
});

module.exports = RootQueryType;
