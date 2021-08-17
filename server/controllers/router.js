const express = require('express');
const { createPost, showPosts, showSinglePost } = require('./postController');
const { showComments, createComment } = require('./commentsController');

const router = express.Router();

router.get('/posts', showPosts);
router.get('/posts/:postId', showSinglePost);
router.get('/comments/:postId', showComments);
router.post('/post/create', createPost);
router.post('/comment/create/:postId', createComment);

module.exports = router;
