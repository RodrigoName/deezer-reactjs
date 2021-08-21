import axios from 'axios';

export default axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': 'e5fb796200msh87d00089c67d477p1afbb8jsn4d6ef84a5a85',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
  },
});
