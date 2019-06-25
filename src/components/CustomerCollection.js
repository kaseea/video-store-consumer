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
      const customerComponents = this.state.customers.map((customer, i) => {
          console.log(customer)
        return (
            <div key={i}>
            {/* { console.log(customer)} */}

                <Customer customer={customer}/> 
            </div>
        )
    });

    return (
        <section>
          <p>{this.state.message}</p>
  
  
          <ul>
            {customerComponents}
          </ul>
        </section>
      );
  }
}

CustomerCollection.propTypes = {

};

export default CustomerCollection;