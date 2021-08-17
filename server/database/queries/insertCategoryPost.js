const connection = require('../config/connection');

const insertCategoryPost = ({ categoryId, postId }) => connection
  .query('insert into category_post (category_id, post_id) values($1,$2)', [categoryId, postId]);

module.exports = insertCategoryPost;
