const SIZE_SCALE_SETTINGS = {
  min: 25,
  max: 100,
  step: 25,
};

const uploadedPhoto = document.querySelector('.img-upload__preview img');
const photoSizeSmallerButton = document.querySelector('.scale__control--smaller');
const photoSizeBiggerButton = document.querySelector('.scale__control--bigger');
const photoSizeScaleInput = document.querySelector('.scale__control--value');

const resetPhotoSizeValue = () => {
  photoSizeScaleInput.value = `${SIZE_SCALE_SETTINGS.max}`;
  uploadedPhoto.style.transform = `scale(${SIZE_SCALE_SETTINGS.max / 100})`;
};

const changeScaleValue = (increase) => {
  let photoSizeScaleValue = parseInt(photoSizeScaleInput.value, 10);
  if (increase) {
    if (photoSizeScaleValue < SIZE_SCALE_SETTINGS.max) {
      photoSizeScaleValue += SIZE_SCALE_SETTINGS.step;
    }
  } else if (photoSizeScaleValue > SIZE_SCALE_SETTINGS.min) {
    photoSizeScaleValue -= SIZE_SCALE_SETTINGS.step;
  }

  photoSizeScaleInput.value = `${photoSizeScaleValue}`;
  uploadedPhoto.style.transform = `scale(${photoSizeScaleValue / 100})`;
};

const onIncreaseScaleButtonClick = () => changeScaleValue(true);
const onDecreaseScaleButtonClick = () => changeScaleValue(false);
photoSizeBiggerButton.addEventListener('click', onIncreaseScaleButtonClick);
photoSizeSmallerButton.addEventListener('click', onDecreaseScaleButtonClick);

export { resetPhotoSizeValue };

