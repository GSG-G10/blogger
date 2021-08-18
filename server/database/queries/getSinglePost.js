const connection = require('../config/connection');

const getSinglePost = (id) => connection
  .query('select posts.id, posts.username, posts.title, posts.body, posts.created_at, categories.color as category_color, categories.name as category_name from posts inner join categories on posts.category_id = categories.id where posts.id = $1', [id]);

module.exports = getSinglePost;
