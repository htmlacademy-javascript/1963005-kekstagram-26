import { getRandomArrayElement, getRandomNumber } from './util.js';
import { createComments } from './create-comment.js';

const PHOTOS_DESCRIPTIONS = [
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

let photoId = 0;

const getUniqPhotoId = () => {
  photoId++;
  return photoId;
};

const createPhotos = () => {
  getUniqPhotoId();
  return {
    id: photoId,
    url: `photos/${  photoId  }.jpg`,
    description: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 25)}, createComments),
  };
};

export {createPhotos};
