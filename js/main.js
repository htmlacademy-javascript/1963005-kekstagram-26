// Пример кода взят с https://learn.javascript.ru/task/random-int-min-max
const getRandomNumb = function(minNumb, maxNumb) {
  let result;
  result = Math.round(minNumb - 0.5 + Math.random() * (maxNumb - minNumb + 1));
  if (minNumb > maxNumb) {
    result = 'Некорректный диапазон чисел. Минимальное число должно быть меньше максимального!';
  }
  if (minNumb < 0) {
    result = 'Некорректный диапазон чисел. Минимальное число должно быть больше 0!';
  }
  return result;
};

getRandomNumb(0, 10);


// Проверка на максимальное количество вводимых символов

const COMMENT_FIELD = document.querySelector('.social__footer-text');
const COMMENT_BUTTON = document.querySelector('.social__footer-btn');

COMMENT_FIELD.oninput = function (commentArea, commentLength) {
  if (commentArea.value.length > commentLength ) {
    COMMENT_BUTTON.disabled = true;
  } else {
    COMMENT_BUTTON.disabled = false;
  }
};
