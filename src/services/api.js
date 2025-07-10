import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL da API:/movie/now_playing?api_key=49be71d1927c0129bb4fd7fb1a090e99&language=pt-Br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;