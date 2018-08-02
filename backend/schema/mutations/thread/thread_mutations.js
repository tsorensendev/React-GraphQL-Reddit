const newThread = require('./new_thread');
const editThread = require('./edit_thread');
const deleteThread = require('./delete_thread');

const thread = {
  newThread,
  editThread,
  deleteThread,
};

module.exports = thread;
