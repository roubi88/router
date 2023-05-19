import React, { useState } from 'react';
import './App.css';
import {moviesData} from './Components/MovieData/MovieData'
import MovieListe from './Components/MovieListe/MovieListe';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterMovieName from './Components/FilterMovieName/FilterMovieName';
import Rating from './Components/FilterMovieRate/Rating';

function App() {
  const [movies, setmovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState('');
  const [rating, setRating] = useState(1)


  const add=(newMovie)=>{
    setmovies([...movies, newMovie]);
  }
  return (
    <div className="App">
     <div className='filterRate'>
     <div className="filter">   
      <h5>Find movie </h5> 
      <FilterMovieName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
     </div>  
     <h5>And/Or</h5>
     <div className="filter">
      <h5>Find movie by rate</h5>
      <Rating rating={rating} setRating={setRating} isMovieRating={false}/>
      </div>
      </div>
      <AddMovie add={add}/>
    
      <MovieListe movies={movies} inputSearch={inputSearch} rating={rating}/>
     
    </div>
  );
}

export default App;
