import React, { Component } from 'react';
import Customer from './Customer';
import PropTypes from 'prop-types';
import axios from 'axios';

import './CustomerCollection.css';


class CustomerCollection extends Component {
    constructor(props) {
        super(props);
    
    }


  render() {
      const customerComponents = this.props.customers.map((customer, i) => {
        return (
            <div key={i}>
                <Customer 
                customer={customer}
                onSelectCustomerCallback={this.props.onSelectCustomerCallback}
                /> 
            </div>
        )
    });

    return (
        <section>
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