// Пример кода взят с https://learn.javascript.ru/task/random-int-min-max
function getRandomNumber (min, max) {
  if (min >= 0 && max > min) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  } else {
    throw new Error('Некорректный диапазон чисел.');
  }
}

getRandomNumber(-5, 16);


// Проверка на максимальное количество вводимых символов

function checkoutTextLength (text, maxLength) {
  return text.length <= maxLength;
}

checkoutTextLength();
