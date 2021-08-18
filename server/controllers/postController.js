const { join } = require('path');
const moment = require('moment');

const {
  getPosts,
  insertPost,
  getSinglePost,
} = require('../database/queries');

const showPosts = (req, res) => {
  getPosts()
    .then((data) => res.json(data.rows))
    .catch((err) => res.status(500).json({ msg: err }));
};

const createPost = (req, res) => {
  const {
    username, title, body, categoryId,
  } = req.body;
  const createdAt = moment().format('YYYY-MM-DD');

  insertPost({
    username, title, body, createdAt, categoryId,
  }).then(() => {
    res.redirect('/');
  })
    .catch(() => res.status(500).json({ msg: '500 intenrnal server error' }));
};

const showSinglePost = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'post.html'));
};

const singlePost = (req, res) => {
  const { postId } = req.params;
  getSinglePost(postId)
    .then((data) => res.json(data.rows))
    .catch(() => res.status(500).json({ msg: '500 intenrnal server error' }));
};

module.exports = {
  createPost,
  showPosts,
  showSinglePost,
  singlePost,
};
