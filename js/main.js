// Пример кода взят с https://learn.javascript.ru/task/random-int-min-max
function getRandomNumber (min, max) {
  if (min >= 0 && max > min) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }
}

getRandomNumber(-5, 10);


// Проверка на максимальное количество вводимых символов

function checkoutTextLength (textArea, maxLength) {
  if (textArea.value.length <= maxLength ) {
    return true;
  } else {
    return false;
  }
}

checkoutTextLength();
