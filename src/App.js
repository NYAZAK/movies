import React, { Component } from 'react';
import {Header, MovieDetails, MovieList, Loading} from './components';
import dataMovie from './data';
import apiMovie from './conf/api.movie';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false // c'est un flag pour notre affichage 
    }

    setTimeout( () => {
      this.setState({
      movies: dataMovie,
      loaded: true
      })
    }, 1000)
  }

  updateSelectedMovie = (index) => {
    // const index = this.state.movies.findIndex( (currentMovie) => {
    //   return title === currentMovie.title;
    // });
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount(){
    apiMovie.get('/discover/movie')
    .then(
      res => console.log(res)
    )
    .catch(
    err => console.log({error : err})
    )
  }


  render() {
    return (
      <div className="App d-flex flex-column">
      <Header/>
      { this.state.loaded ? (
        <div className="d-flex flex-row border flex-fill pt-4 p-2">
        <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie}/>
        <MovieDetails films={this.state.movies[this.state.selectedMovie]}/>
        </div>
      ) : (
        <Loading />
      ) }
      
      </div>
    );
  }
}

export default App;
