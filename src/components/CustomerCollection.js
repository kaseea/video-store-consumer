import React, { Component } from 'react';
import Customer from './Customer';
import PropTypes from 'prop-types';
import axios from 'axios';

import './CustomerCollection.css';


class CustomerCollection extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          customers: [],
        };
    }


componentDidMount() {
    // const localUrl = this.props.url + this.props.boardName + "/cards"
    const localUrl = 'http://localhost:3007/customers'
    console.log(localUrl);
    // is this needed and why?
    // const cards = this.state.cards
    axios.get(localUrl)
        .then((response) => {
        console.log("in axios!");
        console.log(response.data)
        this.setState({ 
            
          customers: response.data,
            })
        })
        .catch((error) => {
        this.setState({ errorMessage: error.message });
        });
    }




  render() {
    //   const customerComponents = this.state.customers.map((movieObject, i) => {
        return (
            <div>
            <p>ugggh</p>
            {/* // <div key={i}>  */}
                {/* <Customer customer={movieObject}/>   */}
            </div>
        )
    // });
  }
}

CustomerCollection.propTypes = {

};

export default CustomerCollection;