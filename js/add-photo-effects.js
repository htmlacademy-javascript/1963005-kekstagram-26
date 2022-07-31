const PHOTO_EFFECTS_SETTINGS = {
  chrome: {
    filter: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },

  sepia: {
    filter: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },

  marvin: {
    filter: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },

  phobos: {
    filter: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },

  heat: {
    filter: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};

const uploadedPhoto = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1
  },
  start: 0,
  step: 0.1,
  connect: 'lower'
});

const resetPhotoEffects = () => {
  effectLevelSlider.setAttribute('disabled', true);
  effectLevelSliderContainer.classList.add('hidden');
  uploadedPhoto.className = 'img-upload__preview';
  uploadedPhoto.style.filter = '';
  effectLevelValue.value = '';
};

const photoEffectHandler = (evt) => {
  const selectedEffect = evt.target.value;
  if (selectedEffect === 'none') {
    resetPhotoEffects();
  } else {
    effectLevelSlider.removeAttribute('disabled');
    effectLevelSliderContainer.classList.remove('hidden');
    uploadedPhoto.className = 'img-upload__preview';
    uploadedPhoto.classList.add(`effects__preview--${selectedEffect}`);
    effectLevelSlider.noUiSlider.updateOptions(PHOTO_EFFECTS_SETTINGS[selectedEffect].options);
  }
};

effectsList.addEventListener('change', photoEffectHandler);

effectLevelSlider.noUiSlider.on('update', () => {
  const effectLevelSliderValue = effectLevelSlider.noUiSlider.get();
  effectLevelValue.value = effectLevelSliderValue;

  const checkedPhotoEffectValue = document.querySelector('input[name="effect"]:checked');
  if (checkedPhotoEffectValue && checkedPhotoEffectValue.value !== 'none') {
    const {filter, unit} = PHOTO_EFFECTS_SETTINGS[checkedPhotoEffectValue.value];
    uploadedPhoto.style.filter = `${filter}(${effectLevelSliderValue}${unit})`;
  }
});

export { resetPhotoEffects };
