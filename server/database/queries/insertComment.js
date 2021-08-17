const connection = require('../config/connection');

const insertComment = ({
  username, body, postId,
}) => connection
  .query('insert into comments (username, body, post_id) values($1,$2,$3) returning id, body', [username, body, postId]);

module.exports = insertComment;
