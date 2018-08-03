const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  thread: {
    type: Schema.Types.ObjectId,
    ref: 'thread',
  },
  votes: { type: Number, default: 0 },
  body: { type: String },
  date: String,
  time: String,
});

CommentSchema.upvote = function(id) {
  const Comment = mongoose.model('comment');
  return Comment.findById(id).then(comment => {
    ++comment.votes;
    return comment.save();
  });
}

CommentSchema.downvote = function (id) {
  const Comment = mongoose.model('comment');
  return Comment.findById(id).then(comment => {
    --comment.votes;
    return comment.save();
  });
}

mongoose.model('comment', CommentSchema);
