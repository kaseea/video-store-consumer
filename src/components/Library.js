import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class Library extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          movies: [],
        };
    }


componentDidMount() {
    // const localUrl = this.props.url + this.props.boardName + "/cards"
    const localUrl = 'http://localhost:3007/movies'
    console.log(localUrl);
    // is this needed and why?
    // const cards = this.state.cards
    axios.get(localUrl)
        .then((response) => {
        console.log("in axios!");
        console.log(response.data)
        this.setState({ 
            
          movies: response.data,
            })
        })
        .catch((error) => {
        this.setState({ errorMessage: error.message });
        });
    }




  render() {
      const movieComponents = this.state.movies.map((movie, i) => {
          console.log(movie)
        return (
            <div key={i}>
                <p>{movie.title}</p>
            </div>
        )
    });

    return (
        <section>
          <p>{this.state.message}</p>
  
  
          <ul>
            {movieComponents}
          </ul>
        </section>
      );
  }
}

// render() {
//     return (
//         <div>
//         { console.log(this.props.customer) }
//         <h2>THIS IS A MOVIE</h2>
//         </div>
//     )
//     }
// }

Library.propTypes = {

};

export default Library;