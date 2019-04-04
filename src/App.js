import React, { Component } from 'react';
import { Header } from './components';
import apiMovie, { movieMap } from './conf/api.movie';
import Film from './features/films';
import Favoris from './features/favoris';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false, // c'est un flag pour notre affichage 
      favoris: []
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

  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then(
        res => res.data.results
      ).then(movieApi => {
        const movies = movieApi.map(movieMap)
        this.updateMovies(movies);
      }
      )
      .catch(
        err => console.log({ error: err })
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

  addFavoris = (title) => {
      
  }


  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Switch>
            <Route path="/films" render={(props) => {
              return (
                <Film
                  { ...props }
                  movies={this.state.movies}
                  updateSelectedMovie={this.updateSelectedMovie}
                  films={this.state.movies}
                  loaded={this.state.loaded}
                  updateMovies={this.updateMovies}
                  selectedMovie={this.state.selectedMovie}
                />
              )
            }} />
            <Route path="/favoris" component={Favoris} />
            <Redirect to="/films" />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
