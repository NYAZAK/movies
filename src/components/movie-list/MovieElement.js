import React, { Component } from 'react';


export default class MovieElement extends Component{

    render(){
        return (
                <div className="w-50 p-2">
                    <div className="border d-flex">
                      <img width="150" height="200" className="mt-5" alt="film" src={this.props.movies.img} />
                      <div className="flex-fill d-flex flex-column p-3">
                        <h5>{this.props.movies.title}</h5>
                        <hr className="w-100" />
                        <p>{this.props.movies.details}</p>
                      </div>
                    </div>
                  </div>
                );
    }



}

