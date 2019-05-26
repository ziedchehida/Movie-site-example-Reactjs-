import React from 'react'
import MovieCard from './moviecard'

const MovieList = ({movies = [], onAddMovie = () => {}}) => (
     <div className="movie-list">
        {
            movies.map((el => <MovieCard key={el.id} movie={el} />))
        }
        <div className="new-movie-card"
        onClick={() => {
            onAddMovie({
                id: Math.random(),
                title: prompt('The movie title: '),
                rating: Number(prompt('The movie rating: ')),
                year: Number(prompt('The movie year: '))
            })
        }}
        >
        +
        </div>
      </div>
)

export default MovieList