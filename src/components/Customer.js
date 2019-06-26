import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

class Customer extends Component {

  // 9:
  // account_credit: 68.41
  // address: "Ap #727-9607 Nibh Avenue"
  // city: "Hilo"
  // id: 10
  // movies_checked_out_count: 0
  // name: "Quinlan Rich"
  // phone: "(521) 124-5753"
  // postal_code: "63747"
  // registered_at: "2015-07-10T22:23:06.000Z"
  // state: "HI"


  render() {
    return (
      <div>
        

        <p>{this.props.customer.name}</p>
        <p>{this.props.customer.id}</p>
        <button 
        // { console.log(this.props.customer.id) }
            // onClick = {() => console.log(this.props)}>
            onClick = {() => this.props.onSelectCustomerCallback(this.props.customer.id) }>
            Select
        </button>
      </div>
    )
  }
}

Customer.propTypes = {

};

export default Customer;