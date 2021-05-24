import './sass/main.scss';

import fetchCountries from './fetchCountries';
import renderCountryMarkup from './renderCountryMarkup';

import { showAlertNotFound } from './alerts';

import debounce from 'lodash.debounce';

const onCountryInput = e => {
  document.querySelector('.countries-container').innerHTML = '';

  const inputValue = e.target.value.trim();

  if (inputValue !== '') {
    fetchCountries(inputValue)
      .then(res => {
        if (res.status === 404) {
          throw res;
        }
        renderCountryMarkup(res);
      })
      .catch(error => {
        showAlertNotFound();
      });
  }
};

const inputCountryRef = document.querySelector('.input');

inputCountryRef.addEventListener('input', debounce(onCountryInput, 700));
