const addComment = require('./add_comment');
const editComment = require('./edit_comment');
const deleteComment = require('./delete_comment');

const comment = {
  addComment,
  editComment,
  deleteComment,
};

module.exports = comment;
