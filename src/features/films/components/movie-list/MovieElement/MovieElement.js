import React, { Component } from "react";
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {

  onClick = () => {
    this.props.updateSelectedMovie(this.props.movie.title)
  }
   
  render() {
    return (
      <div onClick={this.onClick} className={ "d-flex flex-row bg-light " + Style.container }> 
        <img className="w-50"   src={this.props.movie.img} alt={"affiche de " + this.props.movie.title} />
        <div className="flex-fill d-flex flex-column p-3">
          <h5>{this.props.movie.title}</h5>
          <hr className="w-75 mx-auto"/>
          <p className='flex-fill'>{this.props.movie.details}</p>
          <div className='d-flex flex-row justify-content-end'>
            { this.props.isFavori ? (
              <button onClick={ () => {this.props.removeFavori(this.props.movie.title)}} className='btn btn-small btn-outline-danger'>Retirer des favoris</button>
            ) : (
              <button onClick={ () => {this.props.addFavori(this.props.movie)}} className='btn btn-small btn-outline-primary'>Ajouter aux favoris</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
