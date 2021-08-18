const getPosts = require('./getPosts');
const insertPost = require('./insertPost');
const getComments = require('./getComments');
const insertComment = require('./insertComment');
const getCategories = require('./getCategories');

module.exports = {
  getPosts,
  getCategories,
  insertComment,
  getComments,
  insertPost,
};
