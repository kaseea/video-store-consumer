import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

const Movie = (props) => {
    return (
        <div className="movie">
            <div className="movie__section">
              <h3 className="movie__title">{props.title}</h3>
                <img className="image" src={props.image_url} alt="this is an image"/>
                <div class="middle">
                  <div class="text">{props.overview}</div>
                </div>
              <div className="movie__info">
                <span>
                </span> 
              </div>
              <button>
                Select
              </button>
            </div>
        </div>
      )
}


export default Movie;