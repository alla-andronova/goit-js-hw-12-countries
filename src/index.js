import './sass/main.scss';

import fetchCountries from './fetchCountries';
import renderCountryMarkup from './renderCountryMarkup';

import debounce from 'lodash.debounce';

const onCountryInput = e => {
  document.querySelector('.countries-container').innerHTML = '';

  const inputValue = e.target.value.trim();

  if (inputValue !== '') {
    fetchCountries(inputValue)
      .then(renderCountryMarkup)
      .catch(error => {
        console.log(error);
      });
  }
};

const inputCountryRef = document.querySelector('.input');

inputCountryRef.addEventListener('input', debounce(onCountryInput, 700));
