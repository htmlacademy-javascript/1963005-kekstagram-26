import { publishedPhotos } from './data.js';
import { renderMiniatures } from './rendering-miniatures.js';
import { openPhotoUploadForm } from './upload-photo-form.js';
import './form-validate.js';

renderMiniatures(publishedPhotos);
openPhotoUploadForm();

