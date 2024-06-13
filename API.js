import axios from "axios";
const url = 'https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0';

axios.get(url)
  .then(response => {
    console.log(response.data.results);
  })
  .catch(error => {
    console.error('Errore nella richiesta:', error);
  });
