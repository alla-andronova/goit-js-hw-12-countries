import '@pnotify/core/dist/PNotify.css';

import '@pnotify/core/dist/Angeler.css';
import { alert, defaults } from '@pnotify/core';

defaults.styling = 'angeler';
defaults.icons = 'angeler';

const showAlertManyCountries = () => {
  alert({
    type: 'notice',
    text: 'To many matches found. Please enter a more specific query!',
    delay: 2000,
    sticker: false,
    animateSpeed: 'slow',
  });
};

export default showAlertManyCountries;
