import React, { Component } from 'react';
import {Header, MovieDetails, MovieList, Loading} from './components';
import apiMovie from './conf/api.movie';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false // c'est un flag pour notre affichage 
    }
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
      res => res.data.results 
    ).then(movieApi => {
      const movies = movieApi.map(m => ({
          img : `https://image.tmdb.org/t/p/w500${m.poster_path}`,
          title: m.title,
          description: m.overview,
          details: `${m.release_date} | ${m.vote_average} / 10 | ${m.vote_count} ❤`
        }))
        console.log(movies);
        this.updateMovies(movies);
      }
    )
    .catch(
    err => console.log({error : err})
    )
  }


  updateMovies(movies){
    this.setState({
      movies,
      loaded: true
    })
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
