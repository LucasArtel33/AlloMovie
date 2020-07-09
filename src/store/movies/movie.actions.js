import apiMovieRequest from '../../conf/api.movie';

export const REQUEST_MOVIES = 'request movies';
export const FETCH_MOVIES = 'fetch movies';
export const FETCH_MOVIES_SUCCESS = 'fetch movies success';
export const FETCH_MOVIES_ERROR = 'fetch movies error';
export const SET_SELECTED_MOVIE = 'set selected movies';

export const INITIAL_FETCH_MOVIES = 'initial fetch movies'
export const INITIAL_FETCH_MOVIES_SUCCESS = 'initial fetch movies success'
export const INITIAL_FETCH_MOVIES_ERROR = 'initial fetch movies error'


export const requestMovies = () => ({
  type: REQUEST_MOVIES
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
});

export const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  error
});

export const fetchMovies = (filter) => dispatch => {
  dispatch(requestMovies());
  return apiMovieRequest.searchMovies(filter).then( 
    movies => dispatch(fetchMoviesSuccess(movies)),
    error => dispatch(fetchMoviesError(error))
  )
}

export const setSelectedMovie = index => ({
  type: SET_SELECTED_MOVIE,
  index
});

export const initialFetchMoviesSuccess = movies => ({
  type: INITIAL_FETCH_MOVIES_SUCCESS,
  movies
});

export const initialFetchMoviesError = error => ({
  type: INITIAL_FETCH_MOVIES_ERROR,
  error
});

export const initialFetchMovies = () => dispatch => {
  return apiMovieRequest.initialRequest().then( 
    movies => dispatch(fetchMoviesSuccess(movies)),
    error => dispatch(fetchMoviesError(error))
  )
}