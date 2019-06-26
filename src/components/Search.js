import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Search.css';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        movies: [],
        };
      }

    onChangeHandler = (event) => {
        const field = {}
        field[event.target.name] = event.target.value;
    
        this.setState(field);
      }
        
      searchMovieCallback = (event) => {
        event.preventDefault();
    
        this.props.searchMovieCallback({
            title: this.state.title,
        });
      }
      
      componentDidMount () {
        const externalUrl = 'https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false';
          axios.get(externalUrl)
            .then((response) => {
              const newMovies= response.data.map((movie) => {
                return {
                  id: movie.id,
                  title: movie.title,
                  overview: movie.overview,
                  release_date: movie.release_date,
                  image_url: movie.image_url,
                  external_id: movie.external_id,
                }
              })
              this.setState({
                title: newMovies,
              });
            })
            .catch((error) => {
              this.setState({
                errorMessage: `${error.message} when retrieving cards.`,
              });
            });
      }
    
      render() {
        return (
          <form className="search-movie-form" onSubmit={this.addMovieCallback}>
            <div className="search-movie">
                <h3 className="search-movie__header">Search Movie</h3>
            </div>
            <div>
                <label 
                  className="search-movie-form__form-label" 
                  htmlFor="title">Movie Title</label>
                <input className="search-movie-form__form-input"
                  name="title"
                  onChange={this.onChangeHandler}
                  value={this.state.title}>
                </input>
            </div>
            <input className="search-movie-form__form-button" type="submit" name="submit" value="Add Movie" />
        </form>
        )};
    }
    
    Search.propTypes = {
        searchMovieCallback: PropTypes.func.isRequired,
      };
    
    export default Search;