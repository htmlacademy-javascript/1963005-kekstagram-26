import { isEscKeydown } from './util.js';

const pageBody = document.body;

const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFormCLoseButton = document.querySelector('#upload-cancel');
const uploadFormFileInput = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__form');
const hashtagsField = document.querySelector('.text__hashtags');
const photoDescriptionField = document.querySelector('.text__description');

// Функция вызова модального окна для загрузки фото

const openUploadForm = () => {
  pageBody.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');

  const onUploadFormEscKeydown = (evt) => {
    if (isEscKeydown(evt)) {
      evt.preventDefault();
      closeUploadForm();
    }
  };

  const onInputEscKeydown = (evt) => {
    if (isEscKeydown(evt)) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  };

  hashtagsField.addEventListener('keydown', onInputEscKeydown);
  photoDescriptionField.addEventListener('keydown', onInputEscKeydown);

  const onUploadFormCloseButtonClick = () => {
    closeUploadForm();
  };

  uploadFormCLoseButton.addEventListener('click', onUploadFormCloseButtonClick);
  document.addEventListener('keydown', onUploadFormEscKeydown);

  function closeUploadForm() {
    pageBody.classList.remove('modal-open');
    uploadOverlay.classList.add('hidden');
    document.removeEventListener('keydown', onUploadFormEscKeydown);
    uploadFormCLoseButton.removeEventListener('click', onUploadFormCloseButtonClick);
    uploadForm.reset();
  }

};

//Функция с обработчиком на загрузку фотографии для дальнейшей обработки
const openPhotoUploadForm = () => {
  uploadFormFileInput.addEventListener('change', openUploadForm);
};


export { openPhotoUploadForm };
