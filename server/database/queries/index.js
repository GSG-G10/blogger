const getPosts = require('./getPosts');
const insertPost = require('./insertPost');
const getComments = require('./getComments');
const insertComment = require('./insertComment');
const getCategories = require('./getCategories');
const insertCategoryPost = require('./insertCategoryPost');

module.exports = {
  getPosts,
  insertCategoryPost,
  getCategories,
  insertComment,
  getComments,
  insertPost,
};
