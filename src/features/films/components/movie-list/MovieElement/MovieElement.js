import React, { Component } from 'react';
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component{

    chooseMovie = () => {
        this.props.updateSelectedMovie(this.props.movie.title);
    }


    render(){
        return (
               
                    <div onClick={this.chooseMovie} className={" d-flex flex-row " + Style.container}>
                      <img width="150" height="200" alt="film" src={this.props.movie.img} />
                      <div className="flex-fill d-flex flex-column p-3">
                        <h5>{this.props.movie.title}</h5>
                        <hr className="w-100" />
                        <p className="flex-fill">{this.props.movie.details}</p>
                        <div className="d-flex flex-row justify-content-end">
                        {this.props.isFavoris ? (
                          <button onClick={ ()=> {this.props.removeFavoris(this.props.movie.title)}} className="btn btn-danger btn-small">Not fav</button>
                        ): ( 
                        <button onClick={ ()=> {this.props.addFavoris(this.props.movie.title)}} className="btn btn-success btn-small">favoris</button>
                        )}
                        </div>
                      </div>
                    </div>
                 
                );
    }



}

