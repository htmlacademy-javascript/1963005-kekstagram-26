import { createPhotos } from './create-photo-description.js';

// Количество опубликованных фотографий
const USERS_PUBLISHED_PHOTO = 25;

// Создание массива с фото и информацией о нем
const publishedPhotos = Array.from({length: USERS_PUBLISHED_PHOTO}, createPhotos);

export { publishedPhotos };
