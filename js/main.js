import { publishedPhotos } from './data.js';
import { renderMiniatures } from './rendering-miniatures.js';
import './upload-photo-form.js';
import { openPhotoUploadForm } from './upload-photo-form.js';

renderMiniatures(publishedPhotos);
openPhotoUploadForm();

