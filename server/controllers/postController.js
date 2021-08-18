const { join } = require('path');
const moment = require('moment');

const {
  getPosts,
  insertPost,
} = require('../database/queries');

const showPosts = (req, res) => {
  getPosts()
    .then((data) => res.json(data.rows))
    .catch((err) => res.status(500).json({ msg: '500 intenrnal server error' }));
};

const createPost = (req, res) => {
  const { username, title, body } = req.body;
  console.log(req.body)
  const createdAt = moment().format('YYYY-MM-DD');

  insertPost({
    username, title, body, createdAt,
  })
    .then(() => {
      res.redirect('/');
    })
    .catch(console.log)
    // .catch((err) => res.status(500).json({ msg: '500 intenrnal server error' }));
};

const showSinglePost = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'post.html'));
};
module.exports = {
  createPost,
  showPosts,
  showSinglePost,
};
