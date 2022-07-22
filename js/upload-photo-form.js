import { checkoutTextLength, isEscKeydown } from './util.js';

const PHOTO_DESCRIPTION_MAX_LENGTH = 140;
const HASHTAG_REGULAR_EXPRESSION = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_TAGS = 5;

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

//Валидация

//Изначально поставил ограничения по длине в разметке в index, но тогда не выскакивает предупреждение о максимально допустимой длине
const validatePhotoDescriptionLength = (string) => checkoutTextLength(string, PHOTO_DESCRIPTION_MAX_LENGTH);

const validateHashtagsNames = (data) => {
  if (data.length > 0) {
    const hashtagsArray = data.split(' ');
    return(hashtagsArray.every((hashtag) => HASHTAG_REGULAR_EXPRESSION.test(hashtag)));
  }
  return true;
};

const validateHashtagsAmount = (data) => {
  const hashtagsArray = data.split(' ');
  return(hashtagsArray.length <= MAX_TAGS);
};

const validateHashtagsDublicates = (data) => {
  const hashtagsArray = data.split(' ');
  const uniqueHashtagsArray = [...new Set(hashtagsArray.map((hashtag) => hashtag.toLowerCase()))];
  return (hashtagsArray.length === uniqueHashtagsArray.length);
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div'
});

//Проверка максимальной длины строки описания фотографии
pristine.addValidator(
  photoDescriptionField,
  validatePhotoDescriptionLength,
  'Длина комментария не может составлять больше 140 символов'
);

//Проверка именования Тега на "маску" разрешенного именования
pristine.addValidator(
  hashtagsField,
  validateHashtagsNames,
  'Хэш-тег должен начинается с символа #, состоять из букв и чисел, не содержать пробелы, спецсимволы, содержать от 2 до 20 символов'
);

//Проверка на максимольное допустимое количество Тегов
pristine.addValidator(
  hashtagsField,
  validateHashtagsAmount,
  `Максимальное количство хэш-тегов не должно превышать ${MAX_TAGS}`
);

//Проверка Тегов на отсутсвие их повторений
pristine.addValidator(
  hashtagsField,
  validateHashtagsDublicates,
  'Хэш-теги не должны повторяться'
);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    uploadForm.submit();
  }
});

export { openPhotoUploadForm };
