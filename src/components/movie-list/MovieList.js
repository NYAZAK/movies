import React, { Component } from 'react';
import {MovieElement} from '../index';

export default class MovieList extends Component{

    render(){
        return ( 
        
        <div className="w-75 d-flex flex-row flex-wrap align-content-start">

        {
            this.props.movies.map((m, index) => <MovieElement key={m.title + index}  movie={(m) } updateSelectedMovie={() => this.props.updateSelectedMovie(index)}/>) 
            // dans update on passe la référence d'une methode sans l'invoqué, mais dans cette methode on invoque selected movie
        }
        </div> 
        )
    }



}