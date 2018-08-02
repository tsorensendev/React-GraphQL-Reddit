const ThreadType = require('../../types/thread_type');
const mongoose = require('mongoose');
const Thread = mongoose.model('thread');

const deleteThread = {
  type: ThreadType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parentValue, { id }) {
    return Thread.remove({ _id: id });
  },
};

module.exports = deleteThread;
