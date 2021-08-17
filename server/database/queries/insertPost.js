const connection = require('../config/connection');

const insertPost = ({
  username, title, body, createdAt,
}) => connection
  .query('insert into posts (username, title, body, created_at) values($1, $2, $3, $4) RETURNING id, title', [username, title, body, createdAt]);

module.exports = insertPost;
