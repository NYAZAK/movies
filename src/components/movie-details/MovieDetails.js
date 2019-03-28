import React, { Component } from 'react';
import Style from  './MovieDetails.module.css';

export default class MovieDetails extends Component{
  
    render(){
        console.log({Style})
        return (
            <div className="w-25 bg-secondary d-flex flex-column border p-4 text-light">
            <h5>{this.props.films.title}</h5>
            <hr className="w-100"/>
            <div>
            <img className="img-detail d-block mx-auto"  src={this.props.films.img} alt=""/>
            </div>
            <hr className="w-100"/>
            <span className="text-dark">{this.props.films.details}</span>
        
            <p>{this.props.films.description}</p>
            </div>
        );
    }



}