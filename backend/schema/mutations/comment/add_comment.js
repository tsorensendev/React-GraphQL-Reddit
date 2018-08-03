const ThreadType = require('../../types/comment_type');
const mongoose = require('mongoose');
const Thread = mongoose.model('thread');

const addComment = {
  type: ThreadType,
    args: {
    body: { type: GraphQLString },
    threadId: { type: GraphQLID },
  },
  resolve(parentValue, { body, threadId }) {
    return Thread.addComment(threadId, body);
  }
}

module.exports = addComment