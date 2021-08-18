const connection = require('../config/connection');

const insertPost = ({
  username, title, body, createdAt, categoryId,
}) => connection.query('insert into posts (username,title, body, created_at,category_id) values($1,$2,$3,$4,$5) returning id, title', [username, title, body, createdAt, categoryId]);

module.exports = insertPost;
