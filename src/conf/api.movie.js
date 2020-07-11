import * as axios from 'axios';

export const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use(req => {
  req.headers['Authorization'] = 
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTA1ZTZjMGY5MjBiMTY5YWJjZTA0N2JlYmZhYWM2OSIsInN1YiI6IjVlNDE3OWRmMGMyNzEwMDAxMzdmMTM5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hR0L3ytiVtzc8cljWhTbNHJ2CozFPMTyQ3sTMWTOx1M"
  return req;
})

export const apiMovieMap = m => ({
  img:'https://image.tmdb.org/t/p/w500' + m.poster_path,
  title: m.title,
  details:`${m.release_date} | ${ m.vote_average}/10`,
  description: m.overview
})

export default {
  searchMovies: (filter) => {
    const query = 
    '?' +
    Object.keys(filter)
          .map(k => `${k}=${filter[k]}&`)
          .join('');
    return apiMovie.get('/search/movie'+ query)
                   .then( response => response.data.results)
                   .then( moviesApi => moviesApi.map(apiMovieMap))
  },
  initialRequest: () => {
    return apiMovie.get('/discover/movie?language=fr-FR') 
                   .then( response => response.data.results)
                   .then( moviesApi => moviesApi.map(apiMovieMap))
  }
}

