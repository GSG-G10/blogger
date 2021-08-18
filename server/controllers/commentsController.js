const {
  insertComment,
  getComments,
} = require('../database/queries');

const showComments = (req, res) => {
  const { postId } = req.params;
  getComments(postId)
    .then((data) => res.json(data.rows))
    .catch(() => res.status(500).json({ msg: '500 intenrnal server error' }));
};

const createComment = (req, res) => {
  const { username, body } = req.body;
  const { postId } = req.params;
  insertComment({ username, body, postId })
    .then(() => res.redirect(`/posts/${postId}/show#comments`))
    .catch(() => { res.status(500).json({ msg: '500 intenrnal server error' }); });
};
module.exports = { showComments, createComment };
