import countryCardTpl from './templates/country-card.hbs';
import countryListTpl from './templates/country-list.hbs';

import { showAlertManyCountries } from './alerts';

const renderCountryMarkup = countries => {
  if (countries.length === 1) {
    const markup = countryCardTpl(countries[0]);

    document
      .querySelector('.countries-container')
      .insertAdjacentHTML('beforeend', markup);
  }
  if (countries.length > 1 && countries.length <= 10) {
    const markup = countryListTpl(countries);
    document
      .querySelector('.countries-container')
      .insertAdjacentHTML('beforeend', markup);
  }
  if (countries.length > 10) {
    showAlertManyCountries();
  }
};

export default renderCountryMarkup;
