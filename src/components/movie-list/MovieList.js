import React, { Component } from 'react';
import {MovieElement} from '../index';

export default class MovieList extends Component{

    render(){
        return ( 
        
        <div className="w-75 d-flex flex-row flex-wrap align-content-start">
        <MovieElement  movies={this.props.movies[0]}/>
        <MovieElement  movies={this.props.movies[1]}/>
        <MovieElement  movies={this.props.movies[2]}/>
        <MovieElement  movies={this.props.movies[3]}/>
        <MovieElement  movies={this.props.movies[0]}/>
        <MovieElement  movies={this.props.movies[1]}/>
        <MovieElement  movies={this.props.movies[2]}/>
        <MovieElement  movies={this.props.movies[3]}/>
        <MovieElement  movies={this.props.movies[0]}/>
        <MovieElement  movies={this.props.movies[1]}/>
        <MovieElement  movies={this.props.movies[2]}/>
        <MovieElement  movies={this.props.movies[3]}/>
        <MovieElement  movies={this.props.movies[0]}/>
        <MovieElement  movies={this.props.movies[1]}/>
        <MovieElement  movies={this.props.movies[2]}/>
        <MovieElement  movies={this.props.movies[3]}/>
        </div> 
        )
    }



}