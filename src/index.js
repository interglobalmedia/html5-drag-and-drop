import {
    handleDrop,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
} from './modules/dragDrop/dragDrop';

import {
    dropBox
} from './modules/dropBox/dropBox';

import {
    reset
} from './modules/utils/helpers';

import './styles.scss'
/* all event listeners related to drag and drop. have to be on the document because the dragDropBoxes are being creted dynamically and therefore don't initially exist in the DOM */
document.addEventListener('dragstart', handleDragStart, false);
document.addEventListener('dragenter', handleDragEnter, false);
document.addEventListener('dragover', handleDragOver, false);
document.addEventListener('dragleave', handleDragLeave, false);
document.addEventListener('drop', handleDrop, false);
document.addEventListener('dragend', handleDragEnd, false);

// addBox button for creating a new dragDropBox
const addBox = document.getElementById('add-box');
addBox.addEventListener('click', dropBox, false);
// reset button to clear everything
const submitBtn = document.querySelector('.reset');
submitBtn.addEventListener('click', reset, false);