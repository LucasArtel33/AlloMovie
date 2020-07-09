import * as actions from './movie.actions';

// export const INITIAL_FETCH_MOVIES = 'initial fetch movies'

export default (state = {
  data: [],
  isLoading: false,
  error: null,
  selectedMovie: 0
}, action) => {
  switch(action.type) {
    case actions.REQUEST_MOVIES: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actions.INITIAL_FETCH_MOVIES_SUCCESS:
    case actions.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [ ...action.movies ]
      }
    }
    case actions.INITIAL_FETCH_MOVIES_ERROR:
    case actions.FETCH_MOVIES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    case actions.SET_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.index
      }
    }
    default: {
      return state
    }
  }
}
