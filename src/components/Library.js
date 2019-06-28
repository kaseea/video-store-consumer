import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import video from '../images/blockbusterContainer.jpg';
import './Library.css';



class Library extends Component {
  render() {
      const movieComponents = this.props.movies.map((movie, i) => {
        // let a = movie.release_date;
        // console.log(a);
        // console.log(typeof a);
        // console.log("******")
        // let b = a.substr(0, 4);
        // console.log(b);
        // console.log(typeof b);
        // let c = parseInt(b,10);
        // console.log(c);
        // console.log(typeof c);
        return (
            <div key={i} className="movie">
            <div className="movie__section">
              <h3 className="movie__title">{movie.title}</h3>
              <div className="cover__container">{/* <img className="image" src={video} alt="blockbuster cover"/> */}
                <span className="Centerer"></span><img className="cover" src={movie.image_url} alt="movie cover"/>
                <div className="movie__info">
                    {movie.overview}
                </div>
              </div>

              <button onClick={() => this.props.onSelectMovieCallback(movie.id)} >
                Select Movie
              </button>
            </div>
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