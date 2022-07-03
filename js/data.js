import { createPhotos } from './create-photo-description.js';

// Количество опубликованных фотографий
const USERS_PUBLISHED_PHOTO = 25;

const publishedPhotos = Array.from({length: USERS_PUBLISHED_PHOTO}, createPhotos);

export { publishedPhotos };
