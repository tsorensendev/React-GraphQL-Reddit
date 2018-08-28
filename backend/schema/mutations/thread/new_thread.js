const graphql = require('graphql');
const { GraphQLString } = graphql;
const ThreadType = require('../../types/thread_type');
const mongoose = require('mongoose');
const Thread = mongoose.model('thread');

const newThread = {
  type: ThreadType,
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString },
  },
  resolve(parentValue, { title, body, date, time }) {
    return (new Thread({ title, body, date, time })).save();
  },
};

module.exports = newThread;
