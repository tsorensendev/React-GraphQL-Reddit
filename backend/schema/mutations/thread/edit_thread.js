const ThreadType = require('../../types/thread_type');
const mongoose = require('mongoose');
const Thread = mongoose.model('thread');

const editThread = {
  type: ThreadType,
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString },
  },
  resolve(parentValue, { title, body, date, time }) {
    return Thread.edit({ title, body, date, time });
  },
};

module.exports = editThread;
