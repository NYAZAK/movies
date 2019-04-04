import React, { Component } from 'react';
import {Header, MovieDetails, MovieList, Loading, SearchBar} from './components';
import apiMovie, {movieMap} from './conf/api.movie';

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
      const movies = movieApi.map(movieMap)
        this.updateMovies(movies);
      }
    )
    .catch(
    err => console.log({error : err})
    )
  }


  updateMovies = (movies) => {
    {/** on binde le this pour qu'il fasse reference non 
  pas a la methode lors de son execution, mais au this du composant app */}
    this.setState({
      movies,
      loaded: true
    })
  }


  render() {
    return (
      <div className="App d-flex flex-column">
      <Header/>
      <SearchBar updateMovies={this.updateMovies}/>
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
