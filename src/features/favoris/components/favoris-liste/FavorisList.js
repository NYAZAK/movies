import React, { Component } from 'react';
import FavorisElement from './favorisElement/FavorisElement';

export default class FavorisList extends Component{

    render(){
        return ( 
        
        <div className="w-75 d-flex flex-row flex-wrap justify-content-center">

        {
            this.props.favoris.map((f, index) => 
            <FavorisElement 
            key={f.title + index}  
            favoris={f}
            removeFavoris={this.props.removeFavoris}
            />) 
            // dans update on passe la référence d'une methode sans l'invoqué, mais dans cette methode on invoque selected movie
        }
        </div> 
        )
    }



}