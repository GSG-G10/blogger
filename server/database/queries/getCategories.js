const connection = require('../config/connection');

const getPostCategories = (id) => connection
  .query('select categories.name, categories.color from categories inner join category_post on categories.id = category_post.category_id where category_post.post_id = $1', [id]);

module.exports = getPostCategories;
