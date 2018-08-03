const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
  title: { type: String },
  body: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment',
  }],
  votes: { type: Number },
  date: String,
  time: String,
});

ThreadSchema.addComment = function(id, content) {
  const Comment = mongoose.model('comment');
  return this.findById(id).then(thread => {
    const comment = new Comment({ content, thread })
    thread.comments.push(comment)
    return Promise.all([comment.save(), thread.save()])
      .then(([comment, thread]) => thread);
  })
}

ThreadSchema.findComments = function(id) {
  return this.findById(id).populate('comments').then(thread => thread.comments);
}

ThreadSchema.upvote = function (id) {
  const Thread = mongoose.model('thread');
  return Thread.findById(id).then(thread => {
    ++thread.votes;
    return thread.save();
  });
}

ThreadSchema.downvote = function (id) {
  const Thread = mongoose.model('thread');
  return Thread.findById(id).then(thread => {
    --thread.votes;
    return thread.save();
  });
}

mongoose.model('thread', ThreadSchema);