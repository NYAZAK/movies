import React, { Component } from 'react';
import {MovieElement} from '../index';

export default class MovieList extends Component{

    render(){
        return ( 
        
        <div className="w-75 d-flex flex-row flex-wrap justify-content-center">

        {
            this.props.movies.map((m, index) => 
            <MovieElement 
            key={m.title + index}  
            movie={(m) } 
            updateSelectedMovie={() => this.props.updateSelectedMovie(index)}
            isFavoris={this.props.favoris.includes(m.title)}
            addFavoris={this.props.addFavoris}
            removeFavoris={this.props.removeFavoris}
            />) 
            // dans update on passe la référence d'une methode sans l'invoqué, mais dans cette methode on invoque selected movie
        }
        </div> 
        )
    }



}