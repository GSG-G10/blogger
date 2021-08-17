const express = require('express');
const { createPost, showPosts } = require('./postController');

const router = express.Router();

router.get('/posts', showPosts);
router.post('/post/create', createPost);

module.exports = router;
