import React, { Component } from 'react';
import './MovieDetails.css';

export default class MovieDetails extends Component{

    render(){
        return (
            <div className="w-25 bg-secondary d-flex flex-column border p-4 text-light">
            <h5>{this.props.movies.title}</h5>
            <hr className="w-100"/>
            <div>
            <img className="img-detail d-block mx-auto"  src={this.props.movies.img} alt=""/>
            </div>
            <hr className="w-100"/>
            <span className="text-dark">{this.props.movies.details}</span>
        
            <p>{this.props.movies.description}</p>
            </div>
        );
    }



}