const fetchCountries = searchQuery => {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(
    respons => {
      return respons.json();
    },
  );
};

export default fetchCountries;
