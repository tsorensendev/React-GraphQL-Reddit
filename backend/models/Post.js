const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  body: String,
  date: String,
  time: String,
});

mongoose.model('reservation', ReservationSchema);