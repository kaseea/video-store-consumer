import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Search.css';
import axios from 'axios';
import MovieResult from './MovieResult';

class Search extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
      movies: [],
      results: [],
      titleSearch: '',
      errorMessage: '',
      confirmation: '',
      };
    }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;
  
    this.setState(field);
  }
        
  searchMovie = (event) => {
    event.preventDefault();

    this.searchMovieResults(this.state.titleSearch);

    this.setState({
      titleSearch: '',
    });
  }

  componentDidMount () {
    this.searchMovieResults();
  }

  searchMovieResults = (titleSearch) => {
      axios.get(`http://localhost:3000/movies?query=${titleSearch}`)
        .then((response) => {
          this.setState({
            results: response.data,
          });
        })
        .catch((error) => {
          this.setState({
            errorMessage: `${error.message} when retrieving movies.`,
          });
        });
  }

    addMovieCallback = (movieId) => {
      const addedMovie = this.state.results.find(movie => movie.external_id === movieId)
      const addedMovieInfo = {
        title: addedMovie.title,
        overview: addedMovie.overview,
        release_date: addedMovie.release_date,
        image_url: addedMovie.image_url,
        external_id: addedMovie.external_id,
        inventory: 5
      }
  
      axios.post('http://localhost:3000/movies/', addedMovieInfo)
       .then((response) => {
          const newMovie = { ...response.data.movie}
          const currentMovies = this.state.movies;
          currentMovies.push(newMovie);
        this.setState({
          movies: currentMovies,
          confirmation: `Successfully added ${addedMovie.title} to library.`
        });
        })
       .catch((error) => {
        this.setState({
         errorMessage: `${error.message} when adding movie to library.`
        })
      });
  }
    
    render() {
      const movieResults = this.state.results.map((movie, i) => {
        return (
          <MovieResult
          key={i}
          title={movie.title}
          image_url={movie.image_url}
          overview={movie.overview}
          addMovieToLibraryCallback={this.addMovieCallback}
          />
        )
      });
      return (
      <div>
        <div className="validation-errors-display">    
          {this.state.errorMessage}
        </div>
        <div className="validation-confirmation">
          {this.state.confirmation}
        </div>
        <form className="search-movie-form" onSubmit={this.searchMovie}>
          <div className="search-movie">
              <h3 className="search-movie__header">Search Movie</h3>
          </div>
          <div>
              <label 
                className="search-movie-form__form-label" 
                htmlFor="title">Movie Title</label>
              <input className="search-movie-form__form-input"
                name="titleSearch"
                placeholder="Movie Title"
                onChange={this.onChangeHandler}
                value={this.state.titleSearch}
                required>
              </input>
          </div>
          <input className="search-movie-form__form-button" type="submit" name="submit" value="Search Movie" />
      </form>
      <div className="movie">
        {movieResults}
      </div>
      </div>
      )};
  }
    
  Search.propTypes = {
      searchMovieResults: PropTypes.func.isRequired,

    };
  
  export default Search;