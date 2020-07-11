import * as actions from './movie.actions';

export default (state = {
  data: [],
  isLoading: false,
  error: null,
  selectedMovie: 0,
  showModal: true
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
    case actions.SHOW_MODAL: {
      return {
        ...state,
        showModal: true
      }
    }
    case actions.HIDE_MODAL: {
      return {
        ...state,
        showModal: false
      }
    }
    default: {
      return state
    }
  }
}
