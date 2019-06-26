import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class Library extends Component {
    constructor(props) {
        super(props);    
    }

  render() {
      const movieComponents = this.props.movies.map((movie, i) => {
        return (
            <div key={i}>
                <p>{movie.title}</p>
                <button 
            onClick = {() => this.props.onSelectMovieCallback(movie.id) }>
            Select
        </button>
            </div>
        )
    });

    return (
        <section>
          <ul>
            {movieComponents}
          </ul>
        </section>
      );
  }
}

Library.propTypes = {

};

export default Library;