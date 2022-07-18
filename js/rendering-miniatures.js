import { createFullPhoto } from './create-full-photo.js';

const usersPhotoList = document.querySelector('.pictures');
const usersPhotoTemplate = document.querySelector('#picture').content;

const createListFragment = document.createDocumentFragment();

function renderingMiniatures (loadedPhotos) {
  loadedPhotos.forEach(({ url, likes, comments}) => {
    const newPhoto = usersPhotoTemplate.cloneNode(true);
    newPhoto.querySelector('.picture__img').src = url;
    newPhoto.querySelector('.picture__likes').textContent = likes;
    newPhoto.querySelector('.picture__comments').textContent = comments.length;

    newPhoto.addEventListener('click', () => createFullPhoto({ url, likes, comments }));
    createListFragment.appendChild(newPhoto);
  });
  usersPhotoList.appendChild(createListFragment);
}

export { renderingMiniatures };
