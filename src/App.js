import React, {Component} from "react";
import MovieList from './movielist'
import NameFilter from './namefiltre'
import RatingFilter from './ratingfiltre'
import './App.css';


const inception = {
  id:'1',
  title: 'Inception',
  rating: 4,
  image:'https://vignette.wikia.nocookie.net/inception/images/e/ec/Inception_OST_Front_Cover.png/revision/latest?cb=20100711202605',
  year: 2010}


const Alpadrino = {
  id:'2',
  title: 'The God Father',
  year: 1972,
  image: 'https://images-na.ssl-images-amazon.com/images/I/41ew-zMJIpL._SY445_.jpg',
  rating: 5
}

const  Matrix = {
  id:'3',
  title: 'The Matrix',
  year:1999,
  image:'https://cdn1.cinenode.com/movie_poster/16/full/matrix-15627.jpg',
  rating: 3
}
const  unkonwn = {
  id:'4',
  title: 'Ma fama chay',
  year:2019,
  rating: 2
}
const  test = {
  id:'5',
  title: 'test',
  year:2019,
  rating: 1
}

const moviesToDisplay = [inception, Alpadrino,  Matrix, unkonwn, test]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 1,
      movies: moviesToDisplay,
      titleFilter: ''
    }
  }

  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
      el.rating >= this.state.minRatingFilter && 
      el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim()))
  }
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
          value={this.state.titleFilter}
          onChange={(newTitleFilter) => {
            this.setState({
              titleFilter: newTitleFilter
            })
          }}
          />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        </header>
        <main className="movie-app-main">
            <MovieList
              movies={
                this.getVisibleMovies()
              }
              onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />
              />
        </main>
      </div>
    )
  }
}

export default App;
