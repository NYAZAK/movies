import React, { Component } from 'react';
import {Header, MovieDetails, MovieList} from './components';



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      movies: [
        {
          title: 'Le Parrain',
          img: 'https://1645110239.rsc.cdn77.org/image/f330x470/q50/mm/befr/movies1807/posters/le-parrain.20190201000000.jpg',
          details: 'R | 175 min | Crime, Drama',
          description :`En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, 'parrain' de cette famille, marie sa fille à un bookmaker. Sollozzo, 'parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe. `
        },
        {
          title: 'GLADIATOR',
          img: 'https://is1-ssl.mzstatic.com/image/thumb/Video71/v4/85/1c/82/851c823f-271e-877f-21ef-766b29f3a3a6/mzm.gjakfclu.lsr/268x0w.png',
          details: 'R | 155 min | Action, Adventure, Drama',
          description :`Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de 
          l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement 
          le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à 
          ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand 
          d'esclaves, il devient gladiateur et prépare sa vengeance.`
        },
        {
          title: 'Apocalypse Now',
          img: 'https://is1-ssl.mzstatic.com/image/thumb/Video62/v4/45/1e/c7/451ec70b-ef84-a565-f426-1b8138dedfb5/mzm.aaajqjyb.lsr/268x0w.png',
          details: 'R | 147 min | Drama, war',
          description :`Apocalypse Now est un film américain réalisé par Francis Ford Coppola, sorti en 1979. Ce film est une adaptation libre de la nouvelle de Joseph Conrad, Au cœur des ténèbres, parue en 1899. Il a obtenu, entre autres distinctions, la Palme d'or du Festival de Cannes en 1979.`
        },
        {
          title: 'the lord of the ring',
          img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Lord_of_the_Rings_-_The_Return_of_the_King.jpg',
          details: 'PG-13 | 201 min | Action, Adventure, Drama',
          description :`Le Seigneur des anneaux est un roman en trois volumes de J. R. R. Tolkien paru en 1954 et 1955. Prenant place dans le monde de fiction de la Terre du Milieu, il suit la quête du hobbit Frodo Bessac, qui doit détruire l'Anneau unique afin que celui-ci ne tombe pas entre les mains de Sauron, le Seigneur des ténèbres.`
        }
      ],
      selectedMovie: 0
    }
  }


  render() {
    return (
      <div className="App d-flex flex-column">
      <Header/>
      <div className="d-flex flex-row border flex-fill pt-4 p-2">
      <MovieList movies={this.state.movies}/>
      <MovieDetails movies={this.state.movies[this.state.selectedMovie]}/>
      </div>
      </div>
    );
  }
}

export default App;
