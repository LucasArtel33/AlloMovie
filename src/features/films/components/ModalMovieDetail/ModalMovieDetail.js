import React, { Component } from "react";
import Style from './ModalMovieDetail.module.scss';

export default class ModalMovieDetail extends Component{
  render() {
    const movie = this.props.movie;
    console.log(this.showModal)
    if(!this.props.showModal){
      return null
    }

    return (
      
      <div className={Style.modal}> 
        {movie ? (
          <>
            <div className="d-flex flex-row justify-content-between">
              <h5>{movie.title}</h5>
              <button onClick={this.props.closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className='d-flex flex-row flex-fill justify-content-between mt-4'>   
              <div className="w-25 m-auto">
                <img className="w-100" src={movie.img} alt={movie.title} ></img>
              </div>
              <div className="w-75 p-3 m-4 d-flex flex-column">
                <h5>Synopsis:</h5>
                <p className="">{ this.props.movie.description }</p>
                <div className='d-flex flex-row justify-content-between mt-auto'>
                  <span className="text-secondary">{ this.props.movie.details }</span>
                  { this.props.favoris.includes(movie.title) ? (
                    <button onClick={ () => {this.props.removeFavori(movie.title).then(this.props.closeModal)}} className='btn btn-small btn-outline-danger'>Retirer des favoris</button>
                  ) : (
                    <button onClick={ () => {this.props.addFavori(movie).then(this.props.closeModal)}} className='btn btn-small btn-outline-primary'>Ajouter aux favoris</button>
                  )}
                </div>
              </div>
            </div> 
          </>
        ) : null }
      </div>
    )
  }
}