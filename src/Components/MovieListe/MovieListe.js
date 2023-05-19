import React from 'react';
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListe.css";

const MovieListe = ({movies, inputSearch, rating}) => {

    return (
        <div className='moviesList'>
            {movies
            .filter((movie) => 
             movie.title.toUpperCase().includes(inputSearch.toUpperCase())
             &&
             movie.rate >= rating)
            .map((movie) => (<MovieCard movie={movie} key={movie.id}/>))
        } 
        
        </div>
    );
};

export default MovieListe;