import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import NavBar from './components/NavBar';
import CustomerCollection from './components/CustomerCollection';
import axios from 'axios';
import './App.css';
import Search from './components/Search';


class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      customers: [],
      selectedCustomer: null,
      selectedMovie: null,
    };
  }


  // addCardCallback = (card) => {
  //   console.log(card.text);
  //   const cardDataToSendToApi = {
  //     text: card.text,
  //     emoji: card.emoji,
  //   };

  //   const postURL = 'https://inspiration-board.herokuapp.com/boards/' + this.props.boardName + '/cards';
  //   axios.post(postURL, cardDataToSendToApi)
  //   .then((response) => {
  //     console.log("This is what response.data looks like from the API on a successful response", response.data)
  //     let updatedMovieList = this.state.movies;
  //     updatedMovieList.push({
  //       id: movie.id,
  //       title: movie.title,
  //       overview: movie.overview,
  //       release_date: movie.release_date,
  //       image_url: movie.image_url,
  //       external_id: movie.external_id,
  //     });
  //     this.setState({
  //       movie: updatedMovieList,
  //     });
  //   })
  //   .catch((error) => {
  //     this.setState({
  //       errorMessage: error.message
  //     });
  //   });
  // }


  
  render() {


    return (
      
      <Router>
      <div>
        <h2>Movie Portal</h2>
        <ul>
          <NavBar 
          allCustomers={<Link to="/customers">Customers</Link>}          
          allMovies={<Link to="/library">Library</Link>}          
          search={<Link to="/search">Search</Link>}
          />
        </ul>

        

      </div>
    </Router>
    );
  }
}

export default App;
