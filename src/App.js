import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import SearchIcon from './search-icon.svg'
import MovieCard from './MovieCard'

// API Key - 520f3c2b

const API_URL = 'https://www.omdbapi.com?apikey=520f3c2b'

// const movie1 = {
//     "Title": "Spiderman and Grandma",
//     "Year": "2009",
//     "imdbID": "tt1433184",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
// }

const App = () => {

    const [movies, setMovies] = useState([])

    const[searchTerm, setSearchTerm] = useState('')

    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    
    }
    useEffect(() =>{
        searchMovie('superman')
    },[])
    
  return (
    <div className='app'>
    <h1>MovieLand</h1>

    <div className='search'>
        <input
            placeholder='Search for movies'
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value) }
        />
        <img
            src={SearchIcon}
            alt='search'
            onClick={()=> searchMovie(searchTerm)}
        />
    </div>
    {
        movies?.length > 0 
        ? 
        (
            <div className='container'>
                {movies.map((movie)=>(<MovieCard movie={movie}/>))}
            </div>
        ) : (

            <div className='empty'>
                <h2>No Movies Found</h2>
            </div>
        )
    }
    </div>
  )
}

export default App
