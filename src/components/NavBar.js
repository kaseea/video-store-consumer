import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import CustomerCollection from './CustomerCollection';
import Library from './Library';
import Search from './Search';

import './NavBar.css';

class NavBar extends Component {
    constructor() {
      super();
  
      this.state = {
        movies: [],
        errorMessage: null,
        customers: [],
        selectedCustomer: null,
        selectedMovie: null,
      };
    }

    onSelectCustomer = (customerId) => {
      // console.log(this.state.customers)
      // console.log(customerId);
      const customer = this.state.customers.find(customer => customer.id === customerId)
      console.log(customer);
      this.setState({
          selectedCustomer: customer
      });
      console.log(customer.name)
    }

    onSelectMovie = (movieId) => {
      // console.log(this.state.movies)
      // console.log(movieId);
      const movie = this.state.movies.find(movie => movie.id === movieId)
      console.log(movie);
      this.setState({
          selectedMovie: movie
      });
    }

    // addMovieCallback = () => {
    //   this.getMoviesForLibrary();
    // }

    addMovie = (movie) => {
      const list = [...this.state.movies]
      list.push(movie);
  
      this.setState({movies: list});
    }

    getMovies = (movies) => {
      this.setState( {movies: movies})
    }

    componentDidMount() {
      this.getMoviesForLibrary();
    }

    getMoviesForLibrary = () => {
      // const localUrl = this.props.url + this.props.boardName + "/cards"
      const localUrl = 'http://localhost:3000/movies'
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
            console.log(this.state.movies)
            this.props.getMoviesCallback(this.state.movies)
        })
        .catch((error) => {
        this.setState({ errorMessage: error.message });
        });
      const localUrl2 = 'http://localhost:3000/customers'
      // is this needed and why?
      // const cards = this.state.cards
      axios.get(localUrl2)
        .then((response) => {
        console.log("in axios!");
        console.log(response.data)
        let updatedCustomers = response.data;
            this.setState({             
                customers: updatedCustomers,
            })
        })
        .catch((error) => {
        this.setState({ errorMessage: error.message });
        });    
    }

  

  render() {
    const customerSelected = (this.state.selectedCustomer) ? 
    (<section>
       <p>selected customer is: {this.state.selectedCustomer.name}</p>
     </section>) : null;
    
    const movieSelected = (this.state.selectedMovie) ? 
    (<section>
       <p>selected movie is: {this.state.selectedMovie.title}</p>
     </section>) : null;

    return (
    <Router>
      <div>
        <li>{this.props.allMovies} </li>
        <li>{this.props.allCustomers}</li>
        <li>{this.props.search}</li>
      </div>
      <div>
        { customerSelected }
        { movieSelected }
      </div>
      <Route path="/customers/" render={(props) => (
          <CustomerCollection 
          onSelectCustomerCallback={this.onSelectCustomer}
          customers={this.state.customers}
          />
      )}/>
      
      <Route path="/library/" render={(props) => (
          <Library
          onSelectMovieCallback={this.onSelectMovie}
          movies={this.state.movies}
          getMoviesCallback={this.getMovies}
          />
      )}/>
      <Route path="/search/" render={(props) => (
        <Search 
        addMovieCallback={this.addMovie}
        />
      )}/>

    </Router>
    )
  }
}

NavBar.propTypes = {

};

export default NavBar;