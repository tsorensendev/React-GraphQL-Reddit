const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: String,
  date: String,
  time: String,
})

mongoose.model('comment', CommentSchema);