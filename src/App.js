import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import blockbuster from './images/blockbuster.jpg';
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
      errorMessage: null,
    };
  }

  render() {
    return (
      
      <Router>
      <body className="App">
      <header className="App-header">
          <h1 className="App-title">Welcome to</h1>  
          <img src={ blockbuster } className="App-logo" alt="logo" />    
      <div >
        <h2>Movie Portal</h2>
        <ul className="Nav-header">
          <NavBar 
          allCustomers={<Link to="/customers">Customers</Link>}          
          allMovies={<Link to="/library">Library</Link>}          
          search={<Link to="/search">Search</Link>}
          />
        </ul>
      </div>
      </header>
      </body>
    </Router>
    );
  }
}

export default App;
