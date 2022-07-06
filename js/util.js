/* Функция проверки длины строки
function checkoutTextLength (text, maxLength) {
  return text.length <= maxLength;
}

checkoutTextLength(); */

// Генерация рандомного числа из заданного лиапозона
function getRandomNumber (min, max) {
  if (min < 0 || min > max) {
    throw new Error('Некорректный диапазон чисел.');
  }
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

getRandomNumber();

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export { getRandomNumber, getRandomArrayElement };
