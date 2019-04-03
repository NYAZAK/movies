import React, { Component } from 'react';
import Style from  './MovieDetails.module.scss';

export default class MovieDetails extends Component{
  
    render(){
        return (
            <div className="w-25 bg-light d-flex flex-column p-4 text-dark">
            <h5>{this.props.films.title}</h5>
            <hr className="w-100"/>
            
            <img style={ { 'maxWidth':'80%'} } className="img-detail d-block mx-auto w-100"  src={this.props.films.img} alt=""/>
            
            <hr className="w-100"/>
            <span className="text-dark">{this.props.films.details}</span>
            <p>{this.props.films.description}</p>
            </div>
        );
    }

}