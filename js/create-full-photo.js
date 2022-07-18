import { closePopupKeydown } from './util.js';

const pageBody = document.body;
const fullPhoto = document.querySelector('.big-picture');

const photoAddress = fullPhoto.querySelector('.big-picture img');
const photoLikes = fullPhoto.querySelector('.likes-count');
const photoCommentsCount = document.querySelector('.comments-count');
const photoDescription = document.querySelector('.social__caption');

const closeFullPhotoButton = fullPhoto.querySelector('.big-picture__cancel');

const photoComments = fullPhoto.querySelector('.social__comments');
const photoComment = photoComments.querySelector('.social__comment');

const commentsLoader = fullPhoto.querySelector('.comments-loader');


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

const createFullPhoto = ({url, likes, description, comments}) => {
  photoAddress.src = url;
  photoLikes.textContent = likes;
  photoDescription.textContent = description;
  photoCommentsCount.textContent = comments.length;

  document.addEventListener('keydown', closeOnEscape);

  addComments(comments);

  fullPhoto.classList.remove('hidden');
  commentsLoader.classList.add('hidden');
  pageBody.classList.add('modal-open');
};

const closeFullPhoto = () => {
  fullPhoto.classList.add('hidden');
  commentsLoader.classList.remove('hidden');
  pageBody.classList.remove('modal-open');
};

closeFullPhotoButton.addEventListener('click', () => {
  closeFullPhoto();
  document.removeEventListener('keydown', closeOnEscape);
});

function closeOnEscape(evt) {
  if(closePopupKeydown(evt)) {
    closeFullPhoto();
  }
}

export { createFullPhoto };
