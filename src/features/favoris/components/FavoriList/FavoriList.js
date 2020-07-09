import React, { Component } from "react";
import FavoriElement from "./FavoriElement/FavoriElement";

export default class FavoriList extends Component {
  render() {
    return (
      <div className="w-100 d-flex flex-row flex-wrap"> 
        { this.props.favoris.map( (f, index) => (
          <FavoriElement 
            key={f.title + index}
            favori={ f } 
            removeFavori={ () => this.props.removeFavori(f.title) }
          />
        ))}
      </div>
    );
  }
}
