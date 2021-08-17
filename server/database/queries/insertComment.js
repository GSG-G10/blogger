const connection = require('../config/connection');

const insertComment = ({
  username, body, postId,
}) => connection
  .query('insert into comments (username, body, post_id) returning id, body', [username, body, postId]);

module.exports = insertComment;
