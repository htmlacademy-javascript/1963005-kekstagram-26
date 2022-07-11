const usersPhotoList = document.querySelector('.pictures');
const usersPhotoTemplate = document.querySelector('#picture').content;

const createListFragment = document.createDocumentFragment();

function renderingMiniature (loadedPhoto) {
  loadedPhoto.forEach(({url, likes, comments}) => {
    const newPhoto = usersPhotoTemplate.cloneNode(true);
    newPhoto.querySelector('.picture__img').src = url;
    newPhoto.querySelector('.picture__likes').textContent = likes;
    newPhoto.querySelector('.picture__comments').textContent = comments.length;
    createListFragment.appendChild(newPhoto);
  });
  usersPhotoList.appendChild(createListFragment);
}

export {renderingMiniature};
