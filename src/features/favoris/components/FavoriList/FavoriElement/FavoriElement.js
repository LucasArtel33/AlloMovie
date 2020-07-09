import React, { Component } from "react";
import Style from './FavoriElement.module.scss';

export default class FavoriElement extends Component {
  render() {
    const { favori } = this.props;
    return (
      <div className={ "d-flex flex-row bg-light " + Style.container }> 
        <img className="w-50"   src={favori.img} alt={"affiche de " + favori.title} />
        <div className="flex-fill d-flex flex-column p-3">
          <h5>{favori.title}</h5>
          <hr className="w-75 mx-auto"/>
          <p className='flex-fill'>{favori.details}</p>
          <div className='d-flex flex-row justify-content-end'>
            <button onClick={ this.props.removeFavori } className='btn btn-small btn-outline-danger'>Retirer des favoris</button>
          </div>
        </div>
      </div>
    );
  }
}
