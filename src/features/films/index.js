import React from 'react';
import { Loading } from '../../components';
import { connect } from 'react-redux';
import { 
  SearchBar, 
  MovieDetails, 
  MovieList,
  ModalMovieDetail
} from './components';

import { 
  moviesIsLoadingSelector,
  moviesListSelector,
  favorisListNameSelector, 
  moviesSelectedMovieSelector
} from '../../store/selectors';

import {
  fetchMovies,
  setSelectedMovie,
  tryRemoveFavori,
  tryAddFavori,
  closeModal,
  openModal
} from '../../store/actions'

const Films = (props) => {
  return(
    <>
      <SearchBar fetchMovies={props.fetchMovies} />
      { props.isLoading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList 
            movies={ props.movies }
            updateSelectedMovie={ props.setSelectedMovie }
            favoris={ props.favorisListName }
            removeFavori={ props.tryRemoveFavori }
            addFavori={ props.tryAddFavori }
          />
          <MovieDetails 
            movie={props.selectedMovie}
            openModal={props.openModal}
          />
          <ModalMovieDetail 
            movie={props.selectedMovie} 
            favoris={ props.favorisListName }
            removeFavori={ props.tryRemoveFavori }
            addFavori={ props.tryAddFavori }
            showModal={ props.showModal }
            closeModal={ props.closeModal }
          />
        </div>
      )}
    </>
    )
}

export default connect( state => ({
  isLoading: moviesIsLoadingSelector(state),
  movies: moviesListSelector(state),
  favorisListName: favorisListNameSelector(state),
  selectedMovie: moviesSelectedMovieSelector(state),
  showModal: state.movies.showModal
}), {
  fetchMovies,
  setSelectedMovie,
  tryRemoveFavori,
  tryAddFavori,
  closeModal,
  openModal
})(Films);