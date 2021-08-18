/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const modalButton = document.querySelector('#modal-button');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('.close');

modalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

const showPosts = () => {
  fetch('/posts')
    .then((res) => res.json())
    .then((data) => {
      showAllPosts(data);
    });
};

showPosts();

const getCategories = () => {
  fetch('/categories')
    .then((data) => data.json())
    .then((data) => {
      showCategories(data);
    })
    .catch();
};

getCategories();
