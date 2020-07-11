import React, { Component } from "react";
import Style from './MovieDetails.module.scss';

export default class MovieDetails extends Component {
  
  render() {
    return (
      <div className={Style.container} > 
        {this.props.movie ? (
          <>
            <h5>{this.props.movie.title}</h5> 
            <hr className="w-75 mx-auto"/>
            <div>
              <img className="d-block mx-auto w-50" src={this.props.movie.img} alt={this.props.movie.title} ></img>
            </div>
            <hr className="w-75 mx-auto"/>
            <span className="text-secondary">{ this.props.movie.details }</span>
            <p>{ this.props.movie.description.slice(0,140)+"..." }</p>
            <button onClick={ this.props.openModal } className="btn btn-outline-secondary w-100 mx-auto mt-auto">En savoir plus</button>
          </>
        ) : null }
      </div>
      
    );
  }
}
