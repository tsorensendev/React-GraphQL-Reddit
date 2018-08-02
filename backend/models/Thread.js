const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
  title: String,
  body: String,
  date: String,
  time: String,
});

mongoose.model('thread', ThreadSchema);