/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const continer = document.querySelector('#container');
const category = document.querySelector('#category');
const createdAt = document.querySelector('#createdAt');
const username = document.querySelector('#username');
const titleHeader = document.querySelector('#header-title');
const body = document.querySelector('#body');
const commentsDiv = document.querySelector('#comments');
const categoriesSelect = document.querySelector('#categories');

const showArtical = (post) => {
  // header
  const categoryDiv = document.createElement('div');
  categoryDiv.innerHTML = `<a href="#"
  class="category category-${post.category_color}"
  style="font-size: 10px">${post.category_name}</a>`;

  const h1 = document.createElement('h1');
  h1.textContent = post.title;

  const span = document.createElement('span');
  span.textContent = moment(post.created_at).fromNow();

  const title = document.createElement('div');
  title.classList.add('title');
  title.appendChild(h1);
  title.appendChild(span);

  const header = document.createElement('header');
  header.classList.add('article-header');
  header.appendChild(categoryDiv);
  header.appendChild(title);
  // end header

  // content
  const p = document.createElement('p');
  p.textContent = post.body;

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');
  contentDiv.appendChild(p);
  // end content

  // footer
  const usernameH5 = document.createElement('h5');
  usernameH5.textContent = post.username;

  const readMore = document.createElement('a');
  readMore.textContent = 'Read More';
  readMore.href = `/posts/${post.id}/show`;

  const footer = document.createElement('footer');
  footer.classList.add('article-footer');
  footer.appendChild(usernameH5);
  footer.appendChild(readMore);
  // end footer

  const artContent = document.createElement('div');
  artContent.classList.add('artical-content');
  artContent.appendChild(header);
  artContent.appendChild(contentDiv);
  artContent.appendChild(footer);

  const articleImg = document.createElement('div');
  articleImg.classList.add('article-img');
  articleImg.innerHTML = `<img src="./images/${Math.ceil(Math.random() * 3)}.jpg" alt="Alt text">`;

  // article content
  const articleContent = document.createElement('div');
  articleContent.classList.add('article-content');
  articleContent.appendChild(articleImg);
  articleContent.appendChild(artContent);

  const article = document.createElement('article');
  article.classList.add('article');
  article.appendChild(articleContent);

  continer.appendChild(article);
};

const showAllPosts = (posts) => {
  continer.textContent = '';

  posts.forEach((post) => {
    showArtical(post);
  });
};

const showPost = (post) => {
  category.textContent = post.category_name;
  category.classList.add(`category-${post.category_color}`);
  createdAt.textContent = moment(post.created_at).fromNow();
  username.textContent = post.username;
  titleHeader.textContent = post.title;
  body.textContent = post.body;
};

const showSingleComment = (comment) => {
  // comment heading
  const commentAuthor = document.createElement('a');
  commentAuthor.classList.add('comment-author');
  commentAuthor.href = '#';
  commentAuthor.textContent = comment.username;

  const commentInfo = document.createElement('div');
  commentInfo.classList.add('comment-info');
  commentInfo.appendChild(commentAuthor);

  const commentHeading = document.createElement('div');
  commentHeading.classList.add('comment-heading');
  commentHeading.appendChild(commentInfo);
  // end comment heading

  // commnet body
  const bodyP = document.createElement('p');
  bodyP.textContent = comment.body;

  const commentBody = document.createElement('div');
  commentBody.classList.add('comment-body');
  commentBody.appendChild(bodyP);
  // end comment body

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
  commentDiv.appendChild(commentHeading);
  commentDiv.appendChild(commentBody);

  commentsDiv.appendChild(commentDiv);
};

const showComments = (comments) => {
  commentsDiv.textContent = '';
  comments.forEach((comment) => {
    showSingleComment(comment);
  });
};

const showCategories = (cateories) => {
  categoriesSelect.textContent = '';
  cateories.forEach((c) => {
    const option = document.createElement('option');
    option.textContent = c.name;
    option.value = c.id;
    categoriesSelect.appendChild(option);
  });
};
