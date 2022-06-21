// Пример кода взят с https://learn.javascript.ru/task/random-int-min-max
function getRandomNumber (min, max) {
  if (min < 0 || min > max) {
    throw new Error('Некорректный диапазон чисел.');
  }
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

getRandomNumber(1, 25);


// Проверка на максимальное количество вводимых символов

/*function checkoutTextLength (text, maxLength) {
  return text.length <= maxLength;
}

checkoutTextLength();*/


// Больше деталей

/* Создание счетчика ID (Хотел хранить все идентификаторы в массиве, но реализовать через переменную оказалось проще.
  Если додумаюсь, как в функцие CREATE_COMMENTS забирать данные непосредственно из массива,
  то реализую позже)

  const PHOTO_DESCRIPTION_ID = [];

  for (let id = 0; id < USERS_PUBLISHED_PHOTO; id++) {
    PHOTO_DESCRIPTION_ID[id] = id + 1;
  }

Создание массива с ID комментариев
  const COMMENTS_ID = [];

  for (let commentsId = 0; commentsId < USERS_PUBLISHED_PHOTO; commentsId++) {
    COMMENTS_ID[commentsId] = commentsId + 1;
  }

Создание массива с адресом опубликованного изображения
const PHOTOS_URL = [];

for (let url = 0; url < USERS_PUBLISHED_PHOTO; url++) {
  const URL_NUMBER = url + 1;
  PHOTOS_URL[url] = `/photos/${  URL_NUMBER  }/.jpg`;
} */

const USERS_PUBLISHED_PHOTO = 25;

const PHOTOS_DESCRIPTION = [
  'Всем продуктивного дня',
  'На отдыхе',
  'Если смогу, я сделаю это. Конец истории',
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Улыбка - единственный тренд в моде, который всегда актуален.',
  'Никогда не ищите свое счастье там, где вы его уже потеряли.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Все только начинает становиться действительно хорошим.',
  'Совсем не важно, как ты бьешь, а важно, какой держишь удар, как двигаешься вперед.',
  'Будешь идти - ИДИ, если с испугу не свернешь. Только так побеждают!',
  'Если знаешь чего ты стоишь, иди и бери свое.',
  'Будь готов удары держать, а не плакаться и говорить:...',
  'Я ничего не добился из-за него, из-за нее, из-за кого-то',
  'Я в своем познании настолько преисполнился',
  'Что я как будто бы уже сто триллионов миллиардов лет проживаю',
  'На триллионах и триллионах таких же планет, как эта Земля',
  'Самооблодание - единственная вещь, от которой нельзя избавиться, теряя ее',
  'Не позволяй никому даже тебе почувствовать себя недостойной того, что хочешь',
  'Ты не можешь прожить жизнь, угождая другим. Выбор за тобой.',
  'Если ты человек, так и люби человека, а не мечту какую-то бесплотную.',
  'Жизнь как коробка шоколадных конфет, никогда не знаешь, что тебе попадется.',
  'Тормозить ногами надо, а не головой',
  'Думать меньше надо, а соображать больше.',
  'Чтобы стать царем зверей, мало вести себя по-царски. Надо быть царем',
];

// Создание массива с адресом аватара
const AVATAR_URL = [];

for (let url = 0; url < USERS_PUBLISHED_PHOTO; url++) {
  AVATAR_URL[url] = `img/avatar-${  getRandomNumber(1, 6)  }.svg`;
}

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USERS_NAMES = [
  'Александр',
  'Олег',
  'Дима',
  'Николай',
  'Таисия',
  'Ольга',
  'Юлия',
  'Марина',
  'Павел',
  'Данил',
  'Сергей',
  'Алексей',
  'Владимир',
  'Юрий',
  'Валентина',
  'Галина',
  'Светлана',
  'Аркадий',
  'Егор',
  'Роман',
  'Ярослав',
  'Кирилл',
  'Динар',
  'Екатерина',
  'Ирина',
];

const GET_RANDOM_ARRAY_ELEMENT = (elements) => elements[getRandomNumber(0, elements.length - 1)];

let commentId = 0;

const GET_UNIQ_COMMENT_ID = () => {
  commentId++;
  return commentId;
};

let photoId = 0;

const GET_UNIQ_PHOTO_ID = () => {
  photoId++;
  return photoId;
};


const CREATE_COMMENTS = () => ({
  id: GET_UNIQ_COMMENT_ID(),
  avatar: GET_RANDOM_ARRAY_ELEMENT(AVATAR_URL),
  message: GET_RANDOM_ARRAY_ELEMENT(MESSAGE),
  name: GET_RANDOM_ARRAY_ELEMENT(USERS_NAMES),
});


const PUBLISHED_COMMENTS = Array.from({length: USERS_PUBLISHED_PHOTO}, CREATE_COMMENTS);

const CREATE_PHOTOS = () => ({
  id: GET_UNIQ_PHOTO_ID(),
  url: `photos/${  photoId  }/.jpg`,
  description: GET_RANDOM_ARRAY_ELEMENT(PHOTOS_DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: GET_RANDOM_ARRAY_ELEMENT(PUBLISHED_COMMENTS),
});

const PUBLISHED_PHOTOS = Array.from({length: USERS_PUBLISHED_PHOTO}, CREATE_PHOTOS);

