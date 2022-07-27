import { isEscKeydown } from './util.js';

const UPLOADED_COMMENTS_AMOUNT = 5;

const pageBody = document.body;
const fullPhoto = document.querySelector('.big-picture');

const photoAddress = fullPhoto.querySelector('.big-picture img');
const photoLikes = fullPhoto.querySelector('.likes-count');
const photoDescription = document.querySelector('.social__caption');

const closeFullPhotoButton = fullPhoto.querySelector('.big-picture__cancel');

const photoComments = fullPhoto.querySelector('.social__comments');
const photoComment = photoComments.querySelector('.social__comment');

const socialCommentCount = fullPhoto.querySelector('.social__comment-count');
const photoCommentsCount = document.querySelector('.comments-count');
const commentsLoaderButton = fullPhoto.querySelector('.comments-loader');


const createComments = ({avatar, name, message}) => {
  const commentItem = photoComment.cloneNode(true);
  commentItem.querySelector('.social__picture').src = avatar;
  commentItem.querySelector('.social__picture').alt = name;
  commentItem.querySelector('.social__text').textContent = message;

  return commentItem;
};

const addComments = (comments) => {
  const commentFragment = document.createDocumentFragment();
  comments.forEach(({avatar, name, message}) => {
    commentFragment.append(createComments({avatar, name, message}));
  });

  photoComments.innerHTML = '';
  photoComments.append(commentFragment);
};

//
const startCommentsCount = 0;
let commentsData = [];
let commentsCount = 0;

const renderMoreComments = () => {
  const moreComments = commentsData.slice(startCommentsCount, commentsCount + UPLOADED_COMMENTS_AMOUNT);
  addComments(moreComments);
  commentsCount += UPLOADED_COMMENTS_AMOUNT;

  if (commentsData.length <= commentsCount) {
    commentsLoaderButton.classList.add('hidden');
  }
  if (commentsCount > commentsData.length) {
    commentsCount = commentsData.length;
  }
  socialCommentCount.innerHTML = `${commentsCount} из ${commentsData.length} комментариев`;
};
//

const createFullPhoto = ({url, likes, description, comments}) => {
  photoAddress.src = url;
  photoLikes.textContent = likes;
  photoDescription.textContent = description;
  photoCommentsCount.textContent = comments.length;

  document.addEventListener('keydown', onFullPhotoEscKeydown);

  fullPhoto.classList.remove('hidden');
  pageBody.classList.add('modal-open');

  commentsLoaderButton.classList.remove('hidden');
  commentsData = comments;
  commentsCount = 0;
  renderMoreComments();
};

commentsLoaderButton.addEventListener('click', () => {
  renderMoreComments();
});

const closeFullPhoto = () => {
  fullPhoto.classList.add('hidden');
  pageBody.classList.remove('modal-open');
};

closeFullPhotoButton.addEventListener('click', () => {
  closeFullPhoto();
  document.removeEventListener('keydown', onFullPhotoEscKeydown);
});

function onFullPhotoEscKeydown(evt) {
  if(isEscKeydown(evt)) {
    closeFullPhoto();
  }
}

export { createFullPhoto };
