import { createFullPhoto } from './create-full-photo.js';

const usersPhotoList = document.querySelector('.pictures');
const usersPhotoTemplate = document.querySelector('#picture').content;

const createListFragment = document.createDocumentFragment();

function renderMiniatures (loadedPhotos) {
  loadedPhotos.forEach(({ url, likes, comments, description}) => {
    const newPhoto = usersPhotoTemplate.cloneNode(true);
    const usersPhoto = newPhoto.querySelector('.picture__img');
    const usersPhotoLikes = newPhoto.querySelector('.picture__likes');
    const usersPhotoComments = newPhoto.querySelector('.picture__comments');
    usersPhoto.src = url;
    usersPhotoLikes.textContent = likes;
    usersPhotoComments.textContent = comments.length;

    usersPhoto.addEventListener('click', () => createFullPhoto({ url, likes, comments, description }));

    createListFragment.appendChild(newPhoto);
  });
  usersPhotoList.appendChild(createListFragment);
}

export { renderMiniatures };
