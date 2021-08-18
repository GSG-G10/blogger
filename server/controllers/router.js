const express = require('express');
const { createPost, showPosts, showSinglePost } = require('./postController');
const { showComments, createComment } = require('./commentsController');
const { showError404Page, showError500Page } = require('./errorController');

const router = express.Router();

router.get('/posts', showPosts);
router.get('/posts/:postId', showSinglePost);
router.get('/comments/:postId', showComments);
router.post('/post/create', createPost);
router.post('/comment/create/:postId', createComment);
router.use(showError404Page);
router.use(showError500Page);
module.exports = router;
