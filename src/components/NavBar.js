import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import CustomerCollection from './CustomerCollection';
import Library from './Library';
import Search from './Search';

import './NavBar.css';

class NavBar extends Component {

    // componentDidMount() {
    //     // const localUrl = this.props.url + this.props.boardName + "/cards"
    //     const localUrl = 'http://localhost:3007/customers'
    //     console.log(localUrl);
    //     // is this needed and why?
    //     // const cards = this.state.cards
    //     axios.get(localUrl)
    //       .then((response) => {
    //         console.log("in axios!");
    //         console.log(response.data)
    //         // this.setState({ 
    //         //   cards: response.data,
    //         // })
    //       })
    //       .catch((error) => {
    //         this.setState({ errorMessage: error.message });
    //       });
    //   }

  

  render() {
    function Child({ match }) {
        return (
          <div>
            <h3>ID: {match.params.id}</h3>
            <p>awesome, we're getting { match.params.id } by typing in match.params.id </p>
          </div>
        );
      }
  
      function ComponentWithRegex({ match }) {
        return (
          <div>
            <h3>Only asc/desc are allowed: {match.params.direction}</h3>
          </div>
        );
      }

      function onShowCustomers({ match }) {
          return (
            <div>
            {console.log({ match })}
            {console.log("POOOP")}
              <h3>please pleeeeease</h3>
            </div>
          );
      }
    return (
    <Router>
      <div>
        <li onClick={onShowCustomers}>{this.props.allMovies} </li>
        <li>{this.props.allCustomers}</li>
        <li>{this.props.search}</li>
      </div>
      <Route path="/:id" component={Child} />
      <Route path="/customers/" component={CustomerCollection} />
      <Route path="/library/" component={Library} />
      <Route path="/search/" component={Search} />
      <Route
      path="/order/:direction(asc|desc)"
      component={ComponentWithRegex}
        />

    </Router>
    )
  }
}

NavBar.propTypes = {

};

export default NavBar;