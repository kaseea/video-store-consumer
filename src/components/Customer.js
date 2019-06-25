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
        { console.log(this.props.customer) }
        <h2>THIS IS A CUSTOMER</h2>
      </div>
    )
  }
}

Customer.propTypes = {

};

export default Customer;