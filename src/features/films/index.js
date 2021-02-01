import React from 'react';
import {MovieDetails, MovieList, SearchBar} from './components';
import Loading from '../../components/utils/Loaded';
export default (props) => {
    return (
        <div>
            <SearchBar updateMovies={props.updateMovies} />
            {props.loaded ? (
                <div className="d-flex flex-row border flex-fill pt-4 p-2">
                    <MovieList 
                    movies={props.movies} 
                    updateSelectedMovie={props.updateSelectedMovie} 
                    favoris={props.favoris}
                    removeFavoris={props.removeFavoris}
                    addFavoris={props.addFavoris}
                    />
                    <MovieDetails films={props.movies[props.selectedMovie]} />
                </div>
            ) : (
                    <Loading />
                )}

        </div>
    )
}