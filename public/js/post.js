const postId = document.location.pathname.split('/')[2];

const form = document.querySelector('#comment-form');
form.action = `/comments/${postId}/create`;

/* eslint-disable no-undef */
const getPost = () => {
  fetch(`/posts/${postId}`)
    .then((data) => data.json())
    .then((data) => {
      showPost(data[0]);
    })
    .catch(console.log);
};

const getComments = () => {
  fetch(`/comments/${postId}`)
    .then((data) => data.json())
    .then((data) => {
      showComments(data);
    })
    .catch(console.log);
};

getPost();

getComments();
