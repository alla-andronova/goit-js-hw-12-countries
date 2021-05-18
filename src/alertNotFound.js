import '@pnotify/core/dist/PNotify.css';

import '@pnotify/core/dist/Angeler.css';
import { alert, defaults } from '@pnotify/core';

defaults.styling = 'angeler';
defaults.icons = 'angeler';

const showAlertNotFound = () => {
  alert({
    type: 'notice',
    text: 'There is not such country!',
    delay: 2000,
    sticker: false,
    animateSpeed: 'slow',
  });
};

export default showAlertNotFound;
