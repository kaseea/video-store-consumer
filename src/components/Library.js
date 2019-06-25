import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Library extends Component {



render() {
    return (
        <div>
        { console.log(this.props.customer) }
        <h2>THIS IS A MOVIE</h2>
        </div>
    )
    }
}

Library.propTypes = {

};

export default Library;